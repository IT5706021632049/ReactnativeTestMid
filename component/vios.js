import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';


class vios extends Component{
  render() {
    return (
      <View style={styles.welcome}>
     <Text style={styles.h1}> Vios</Text>
      <Image source={{uri: 'http://www.arcticthailand.com/main/wp-content/uploads/2016/05/Toyota-vios-side-orange-metallic.png'}}
       style={{width: 410, height: 200}} />
      <Text style={styles.nameCar}>ราคา 670,000 บาท</Text>
    </View>
    );
  }
}
export default vios;
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