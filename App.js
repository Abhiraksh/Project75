import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppHeader from "./components/AppHeader";
import LoginScreen from "./screens/LoginScreen"
import {TabNavigator} from "./components/TabNavigator";
import {createAppContainer,   createSwitchNavigator} from "react-navigation";


export default class App extends React.Component {
  render() {
    return (
     
       <AppContainer/>
       
      
    );
  }
}

const switchNavigator = createSwitchNavigator({
     LoginScreen:  {screen: LoginScreen},
     BottomTab: {screen: TabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});