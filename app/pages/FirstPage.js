import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

// Theme
import Theme from './../Theme'

// Build a local Item list to be displayed as a list
makeList = () => {
  var tab = [];
  for (let i = 0; i < 20; i++)
    tab.push({ text: 'Item n°' + i, key: i });
  return tab;
};

const list = makeList();


export default class FirstPage extends React.Component {

  static navigationOptions = {
    title: 'First Page',
  };

  nav(item) {
    const { navigate } = this.props.navigation;
    navigate('Second', { option: item.text })
  }

  renderItem = (item, i) => {
    return (
      <TouchableOpacity style={styles.item} onPress={this.nav.bind(this, item)} key={i} >
        <Text style={styles.itemText}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {list.map(this.renderItem)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: Theme.listItemColor,
  },
  itemText: {
    color: Theme.textColor
  }
})


 