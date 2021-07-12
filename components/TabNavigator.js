import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import StoryReading from "../screens/ReadAStory";
import StoryWriting from "../screens/StoryWriting";
import {createBottomTabNavigator} from "react-navigation-tabs";


export const TabNavigator = createBottomTabNavigator({
  Write:{
   screen: StoryWriting,
   navigationOptions:{
       tabBarIcon: <Image source={require("../assets/write.png")} style={{width: 20, height: 20}}></Image>,
       tabBarLabel: "Story Writing"
   }
  },
  Read:{
      screen: StoryReading,
      navigationOptions:{
          tabBarIcon: <Image source={require("../assets/read.png")} style={{width:20, height:20}}/>,
          tabBarLabel: "Story Reading"
      }
  }
 
})




