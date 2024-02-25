import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useMatchDetailsQuery } from "../redux/features/match/matchesApiSlice";

const MatcheDetails = () => {
  const route = useRoute();
  const { id } = route.params;
  const { data: matchDetails, isSuccess, isLoading } = useMatchDetailsQuery(id);
  const [details, setDetails] = useState(null);
  
  useEffect(() => {
    if (isSuccess) {
      setDetails(matchDetails.data);
    }
  }, [matchDetails, isSuccess]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {details && (
        <>
          <Text style={styles.title}>{details.name}</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  participantsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 40,
  },
  participantItem: {
    alignItems: 'center',
  },
  participantImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  participantName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default MatcheDetails;
