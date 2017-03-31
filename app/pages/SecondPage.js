import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

// Theme
import Theme from './../Theme'

export default class SecondPage extends React.Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `${state.params.option}`,
  };
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Second Page! with {params.option}
        </Text>
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
    fontSize: 20,
    textAlign: 'center'
  },
})