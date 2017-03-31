import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Theme
import Theme from './Theme'

// Pages
import HomePage from './pages/HomePage'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'


let navOptions = {
  header: {
    titleStyle: {
      color: Theme.headerTitleColor
    },
    tintColor: Theme.headerBackTextColor,
    style: {
      backgroundColor: Theme.headerBackgroundColor
    }
  },
}

// Navigation stack configuration
const SimpleNavTemplate = StackNavigator({
  Home: { screen: HomePage, navigationOptions: navOptions},
  First: { screen: FirstPage, navigationOptions: navOptions },
  Second: { screen: SecondPage, navigationOptions: navOptions },  
});

AppRegistry.registerComponent('SimpleNavTemplate', () => SimpleNavTemplate);