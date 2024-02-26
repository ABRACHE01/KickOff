import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import FootballMatchCard from "../components/FootballMatchCard";
import { useMatchesQuery } from "../redux/features/match/matchesApiSlice";
import Loader from "../components/Spinner";

const Matches = () => {
  const { data: matchesApi, isSuccess , isLoading } = useMatchesQuery({});
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (matchesApi && isSuccess) {
      setMatches(matchesApi.data);
    }
  }, [matchesApi, isSuccess]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView>
          {matches.map((match) => (
            <FootballMatchCard key={match.id} isFav={false} match={match} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Matches;

