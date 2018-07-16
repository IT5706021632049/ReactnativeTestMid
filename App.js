import React, { Component } from 'react';
import {
  StyleSheet

} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import registerStudent from './component/registerStudent';
import showDataStudent from './component/showDataStudent';
import yaris from './component/yaris';
import vios from './component/vios';
import altis from './component/altis';
import chr from './component/chr';
import camry from './component/camry';
import showInput from './component/showInput';
import vat10per from './component/vat10per';
import vat15per from './component/vat15per';
import vat20per from './component/vat20per';
import vat25per from './component/vat25per';
import vat30per from './component/vat30per';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  register: registerStudent,
  showData: showDataStudent,
  yaris: yaris,
  vios: vios,
  altis: altis,
  chr: chr,
  camry: camry,
  showInput: showInput,
  vat10per: vat10per,
  vat15per: vat15per,
  vat20per: vat20per,
  vat25per: vat25per,
  vat30per: vat30per,
});
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
