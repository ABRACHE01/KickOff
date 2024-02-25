import { ScrollView, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { usePlayersQuery, useSearchPlayersQuery } from "../redux/features/Player/playerApiSlice";
import FootballPlayerCard from "../components/FootballPlayerCard";
import Loader from "../components/Spinner";
import PlayerSearch from "../components/PlayerSearch";
import { selectPlayerSearch } from "../redux/features/Player/playerSelectors";
import { useSelector } from "react-redux";

const Players = () => {
  const { data: playersApi, isSuccess: isPlayersSuccess, isLoading: isPlayersLoading } = usePlayersQuery({});
  const selectedSearch = useSelector(selectPlayerSearch); 
  const { data: searchPlayersApi, isSuccess } = useSearchPlayersQuery(selectedSearch);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (isPlayersSuccess && playersApi) {
      setPlayers(playersApi.data);
    }
  }, [isPlayersSuccess, playersApi]);

  useEffect(() => {
    if (isSuccess) {
      setPlayers(searchPlayersApi.data);
    }
  }, [isSuccess, searchPlayersApi]);

  return (
    <View style={styles.container}>
      {isPlayersLoading ? (
        <Loader />
      ) : (
        <ScrollView>
          <PlayerSearch />
          {players?.map((player) => (
            <FootballPlayerCard key={player.id} player={player} />
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

export default Players;
