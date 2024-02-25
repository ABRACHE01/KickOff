import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { usePlayerDetailsQuery } from "../redux/features/Player/playerApiSlice";

const PlayerDetails = () => {
  const route = useRoute();
  const { id } = route.params;
  const { data: playerDetails, isSuccess } = usePlayerDetailsQuery(id);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      setDetails(playerDetails.data);
    }
  }, [playerDetails, isSuccess]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player Details</Text>
      {details && (
        <>
          <Image style={styles.playerImage} source={{ uri: details.image_path }} />
          <Text style={styles.text}>Name: {details.name}</Text>
          <Text style={styles.text}>Common Name: {details.common_name}</Text>
          <Text style={styles.text}>Date of Birth: {details.date_of_birth}</Text>
          <Text style={styles.text}>Height: {details.height} cm</Text>
          <Text style={styles.text}>Weight: {details.weight} kg</Text>
          <Text style={styles.text}>Nationality: {details.nationality}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PlayerDetails;
