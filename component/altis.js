import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';


class altis extends Component{
  render() {
    return (
      <View style={styles.welcome}>
        <Text style={styles.h1}> Altis</Text>
      <Image source={{uri: 'https://www.toyota.co.th/media/product/color/general/1b43cb92578247eb73247fb9054ed4ab63b740792b2d6ac927fe99286d12c92a.png'}}
       style={{width: 450, height: 200}} />
      <Text style={styles.nameCar}>ราคา 999,000 บาท</Text>
    </View>
    );
  }
}
export default altis;
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