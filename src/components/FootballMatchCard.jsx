import React from "react";
import { Card, Text } from "@ui-kitten/components";
import { Image , View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const FootballMatchCard = ({ match }) => {
  const navigation = useNavigation();
  const goToMatchDetails = (id) => {
    navigation.navigate("MatcheDetails", { id });
  };
  
  return (
    <View className="p-3">
    <Card onPress={() => goToMatchDetails(match.id)}>
      <View className="flex flex-row justify-center">
        <View className="items-center">
          <Image className="w-12 h-12 rounded-full" source={{ uri: match.participants[0].image_path }} />
          <Text className="mt-2 text-lg font-bold">{match.participants[0].name}</Text>
        </View>
        <View className="items-center mx-4">
          <Text className="text-2xl font-bold">vs</Text>
        </View>
        <View className="items-center">
          <Image className="w-12 h-12 rounded-full" source={{ uri: match.participants[1].image_path }} />
          <Text className="mt-2 text-lg font-bold">{match.participants[1].name}</Text>
        </View>
      </View>
    </Card>
  </View>
  );
};



export default FootballMatchCard;
