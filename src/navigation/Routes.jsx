import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Matches from "../screens/Matches";
import MatcheDetails from "../screens/MatcheDetails";
import Players from "../screens/Players";
import PlayerDetails from "../screens/PlayerDetails";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MatchesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Matches"
        options={{ title: "Matches" , headerTitleAlign: "center" }}
        component={Matches}
      />
      <Stack.Screen
        name="MatcheDetails"
        options={{ title: "Matche details" , headerTitleAlign: "center" }}
        component={MatcheDetails}
      />
    </Stack.Navigator>
  );
};

const PlayersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Players"
        options={{ title: "Player"  , headerTitleAlign: "center"}}
        component={Players}
      />
      <Stack.Screen
        name="PlayerDetails"
        options={{ title: "Player Details" , headerTitleAlign: "center",}}
        component={PlayerDetails}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
        name="MatchesTab" 
        component={MatchesStack}
        options={{
          tabBarLabel: 'Matches',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="soccer" color={color} size={26} />

          ),
        }}
         />
        <Tab.Screen 
        name="PlayersTab" 
        component={PlayersStack}
        options={{
          tabBarLabel: 'Players',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
