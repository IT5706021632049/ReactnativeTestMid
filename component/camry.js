import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';


class camry extends Component{
  render() {
    return (
      <View style={styles.welcome}>
        <Text style={styles.h1}> Camry</Text>
      <Image source={{uri: 'https://www.toyota.co.th/media/product/color/general/e25a455949df1d1a3e25460235f0ec14c3c6eab0bfcce853e346a386e8937b82.png'}}
       style={{width: 450, height: 200}} />
      <Text style={styles.nameCar}>ราคา 1,800,000 บาท</Text>
    </View>
    );
  }
}
export default camry;
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