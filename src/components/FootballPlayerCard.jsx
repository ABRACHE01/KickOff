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
      <View style={styles.container}>
      <Card style={styles.card} onPress={() => goToPlayerDetails(player.id)}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: player.image_path }} />
        </View>
        <View style={styles.infoContainer}>
          <Text category="h6">{player.display_name}</Text>
          <Text>{player.date_of_birth}</Text>
          <Text>{player.nationality_id}</Text>
        </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    card: {
      flexDirection: "row",
    },
    imageContainer: {
      padding: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    infoContainer: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: 10,
    },
  });

export default FootballPlayerCard


