import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Matches from '../screens/Matches';
import MatcheDetails from '../screens/MatcheDetails';
import Players from '../screens/Players';
import PlayerDetails from '../screens/PlayerDetails';


const Stack = createNativeStackNavigator();


const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Matches" options={{title: 'Matches'}} component={Matches} />
      <Stack.Screen name="MatcheDetails" options={{title: 'Matche details'}}  component={MatcheDetails}/>
      <Stack.Screen name="Players" options={{title: 'Player'}} component={Players} />
      <Stack.Screen name="PlayerDetails" options={{title: 'Player Details '}} component={PlayerDetails}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes