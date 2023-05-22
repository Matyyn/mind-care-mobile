import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Settings from "../screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainScreen from "../screens/MainScreen";
import Forums from "../screens/forums";
import Therapy from "../screens/therapy";
<<<<<<< HEAD
import guidedJournaling from "../components/Navigation"
import AnxietyTests from './AnxietyNavigator'
import Profile from './ProfileStack'
import DepressionTests from './DepressionNavigator'
import Insights from './InsightsTab'
import DailyTask from './DailyTaskStack'
import PyschologicalProfile from './MoodsScreensNavigator'
=======
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InsightsProfile from "../screens/InsightsProfile";
import DailyTasks from "../screens/dailyReminder/dailyTasks";
import Navigation from "./Navigation";

>>>>>>> cf1454f053058a3ea58f2526ace4541be8bc6b68
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
<<<<<<< HEAD
      <Tab.Screen name="Home" component={MainScreen}  options={{
          headerShown: false, 
          tabBarIcon: () => {
            return <Ionicons name="md-home-outline" size={24} color="black" />;
          },
        }}/>
      <Tab.Screen name="Forum" component={Forums} options={{
          headerShown: false, 
=======
      <Tab.Screen
        name="Home"
        component={Navigation}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name="md-home-outline" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forums}
        options={{
>>>>>>> cf1454f053058a3ea58f2526ace4541be8bc6b68
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="forum-outline"
                size={24}
                color="black"
<<<<<<< HEAD
              />)
          },
        }} />
      <Tab.Screen name="Therapy" component={Therapy}  />
      <Tab.Screen name="Task" component={DailyTask} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={Profile} />
=======
              />
            );
          },
        }}
      />
      <Tab.Screen name="Therapy" component={Therapy} />
      <Tab.Screen name="Task" component={DailyTasks} />
      <Tab.Screen
        name="Insight Profile"
        component={InsightsProfile}
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
>>>>>>> cf1454f053058a3ea58f2526ace4541be8bc6b68
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
