import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class showDataStudent extends Component{
  render() {
    return (
      <View style={styles.welcome}>
      <Text style={styles.welcome}>Data Studnt</Text>
      <Button title="BACK To HOME" onPress={() => this.props.navigation.navigate('showData')}></Button>
    </View>
    );
  }
}
export default showDataStudent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});