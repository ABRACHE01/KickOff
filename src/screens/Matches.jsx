import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import FootballMatchCard from "../components/FootballMatchCard";
import { useMatchesQuery } from "../redux/features/matches";

const Matches = () => {

  const { data: matchesApi, isSuccess } = useMatchesQuery({});
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (matchesApi && isSuccess) {
      setMatches(matchesApi.data);
    }
  }, [matchesApi, isSuccess]);

  return (
    <ScrollView>
      { matchesApi && isSuccess ? (
        matches.map((match) => (
          <FootballMatchCard key={match.id} match={match} />
        ))
      ) : (
        <Text>Loading ...</Text>
      )}
    </ScrollView>
  );
};

export default Matches;
