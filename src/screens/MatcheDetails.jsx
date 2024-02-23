import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useMatchDetailsQuery } from "../redux/features/matches";

const MatcheDetails = () => {
  const route = useRoute();
  const { id } = route.params;
  const { data: matchDetails, isSuccess } = useMatchDetailsQuery(id);
  const [details, setDetails] = useState(null);
  
  useEffect(() => {
    if (isSuccess) {
      setDetails(matchDetails.data);
    }
  }, [matchDetails, isSuccess]);

  return (
    <View style={styles.container}>
      {details && (
        <>
          <Text style={styles.title} className="text-center">{details.name}</Text>
          <View style={styles.participantsContainer}>
            {details.participants.map((participant, index) => (
              <View key={index} style={styles.participantItem}>
                <Image
                  style={styles.participantImage}
                  source={{ uri: participant.image_path }}
                />
                <Text style={styles.participantName}>{participant.name}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.text}>Result: {details.result_info}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  participantsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  participantItem: {
    alignItems: 'center',
  },
  participantImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  participantName: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default MatcheDetails;
