import React, { useState } from "react";
import { Card, Text } from "@ui-kitten/components";
import { Image , TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; 
import { toggleFavoriteMatch } from "../redux/features/match/matchSlice";
import { useDispatch } from "react-redux";

const FootballMatchCard = ({ match , isFav }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState();
  const goToMatchDetails = (id) => {
    navigation.navigate("MatcheDetails", { id });
  };
  
  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteMatch(match))
    setIsFavorite(!isFavorite);
  };

  return (
    <View className="p-3">
    <Card onPress={() => goToMatchDetails(match.id)}>
      <View className="flex flex-row justify-center">
      {   !isFav && 
        <TouchableOpacity onPress={handleToggleFavorite} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
            <Icon
              name={isFavorite ? "heart" : "heart-o"}
              size={20}
              color={isFavorite ? "#FF0000" : "#000000"}
            />
        </TouchableOpacity>
        }
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
