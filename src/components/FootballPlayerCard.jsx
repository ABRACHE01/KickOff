import React from "react";
import { Card, Text } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const FootballPlayerCard =  ({ player }) => {

  const navigation = useNavigation();
  const goToPlayerDetails = (id) => {
    navigation.navigate("PlayerDetails", { id });
  };
  
  return (
    <View className="p-4">
    <Card  onPress={() => goToPlayerDetails(player.id)}>
    <View className="flex-row">
      <View className="p-2">
        <Image className="w-24 h-24 rounded-full" source={{ uri: player.image_path }} />
      </View>
      <View style={styles.infoContainer}>
            <Text style={styles.playerName}>{player.display_name}</Text>
            <Text>{player.date_of_birth}</Text>
            <Text>{player.nationality_id}</Text>
      </View>
     </View>
    </Card>
  </View>
  )
}
const styles = StyleSheet.create({
  
  infoContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  playerName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FootballPlayerCard


