import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native"



const Matches = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text> this is screen of matches </Text>
      <TouchableOpacity onPress={() => navigation.navigate("MatcheDetails")}><Text>Go to the matches details</Text></TouchableOpacity>
    </View>
    )
}



export default Matches