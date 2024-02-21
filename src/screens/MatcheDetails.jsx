import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"


const MatcheDetails = () => {

const navigation = useNavigation()

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text> this is screen of matches details </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Players")}><Text>Go to the matches details</Text></TouchableOpacity>
    </View>  
    )
}

export default MatcheDetails
