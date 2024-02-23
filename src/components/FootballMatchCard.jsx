import React from "react";
import { Card, Text } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FootballMatchCard = ({ match }) => {
  const navigation = useNavigation();
  const goToMatchDetails = (id) => {
    navigation.navigate("MatcheDetails", { id });
  };
  return (
    <View className="p-3">
      <Card onPress={() => goToMatchDetails(match.id)}>
      <View style={styles.teamContainer}>
        <Image style={styles.teamLogo} source={{ uri: match.participants[0].image_path }} />
        <Text style={styles.teamName}>{match.participants[0].name}</Text>
      </View>
      <View style={styles.vsContainer}>
        <Text style={styles.vsText}>vs</Text>
      </View>
      <View style={styles.teamContainer}>
        <Image style={styles.teamLogo} source={{ uri: match.participants[1].image_path }} />
        <Text style={styles.teamName}>{match.participants[1].name}</Text>
      </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({

  teamContainer: {
    alignItems: 'center',
  },
  teamLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  teamName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  vsContainer: {
    alignItems: 'center',
  },
  vsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FootballMatchCard;
