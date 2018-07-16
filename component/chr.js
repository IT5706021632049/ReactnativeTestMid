import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';


class chr extends Component{
  render() {
    return (
      <View style={styles.welcome}>
        <Text style={styles.h1}> C-HR</Text>
      <Image source={{uri: 'http://car250.com/wp-content/uploads/2018/01/ENRY-1.png'}}
       style={{width: 450, height: 200}} />
      <Text style={styles.nameCar}>ราคา 1,100,000 บาท</Text>
    </View>
    );
  }
}
export default chr;
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
  nameCar:{
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  h1:{
    fontSize: 30,
    textAlign: 'center',
    color: 'black',

  },
  
});