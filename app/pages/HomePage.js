import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  StatusBar
} from 'react-native';

// Theme
import Theme from './../Theme'

export default class HomePage extends React.Component {

  static navigationOptions = {
    title: 'Simple Nav Template',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor={Theme.statusBarColor}
          barStyle="light-content"
        />
        <Text style={styles.title}>Home Page</Text>
        <Button
          onPress={() => navigate('First')}
          color={Theme.buttonColor}
          title="Go to 1rst Page >"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: Theme.titleTextColor,
    paddingTop: 15,
    paddingBottom: 30,
    fontSize: 20,
    textAlign: 'center'
  },
})