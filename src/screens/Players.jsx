import { useNavigation } from "@react-navigation/native";
import { Text , TouchableOpacity, View } from "react-native"


const Players = () => {
  const navigation = useNavigation();
  return (
    <View  className="flex-1 items-center justify-center bg-white">
      <Text> this is screen of players </Text>
      <TouchableOpacity onPress={() => navigation.navigate("PlayerDetails")}><Text>Go to the Players details</Text></TouchableOpacity>
    </View>  
    )
}




export default Players