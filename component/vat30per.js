import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import RadioButton from 'radio-button-react-native';
class vat30per extends Component{
    constructor(props) {
        super(props);
        this.state = {

 
                     };
      }
handleOnPress(value){
        this.setState({value:value})
    }
  render() {
    this.state.value
    return (
      <View >
      <Text style={styles.h1}>เงินดาวน์</Text>
      <Text style={styles.h2}>ยอดเงินดาวน์ : 49000 บาท</Text>
      <Text style={styles.h2}>ค่างวด : {490000 - 147000} บาท</Text>
      <Text>    </Text>
      <Text style={styles.nameCar}>ผ่อน 4 ปี อัตราดอกเบี้ย 2.5%</Text>
      <RadioButton currentValue={this.state.value} value={(490000 - 147000)/48 + (((490000 - 147000)/48)*2.5)/100} onPress={this.handleOnPress.bind(this)}/>
    
      <Text style={styles.nameCar}>ผ่อน 5 ปี อัตราดอกเบี้ย 3.0%</Text>
      <RadioButton  currentValue={this.state.value} value={(490000 - 147000)/60 + (((490000 - 147000)/60)*3.0)/100} onPress={this.handleOnPress.bind(this)} />
      
      <Text style={styles.nameCar}>ผ่อน 6 ปี อัตราดอกเบี้ย 3.5%</Text>
      <RadioButton currentValue={this.state.value} value={(490000 - 147000)/72 + (((490000 - 147000)/72)*3.5)/100} onPress={this.handleOnPress.bind(this)} />
      
      <Text style={styles.nameCar}>ผ่อน 7 ปี อัตราดอกเบี้ย 4.0%</Text>
      <RadioButton currentValue={this.state.value} value={(490000 - 147000)/84 + (((490000 - 147000)/84)*4.0)/100} onPress={this.handleOnPress.bind(this)} />
    
      <Text style={styles.nameCar}>เงินผ่อนต่องวด : {this.state.value} บาท</Text>
      <Text style={styles.nameCar}>จำนวนเงินทั้งหมด เมื่อผ่อนชำระครบ 4 ปี : {this.state.value * 48} บาท</Text>
      <Text style={styles.nameCar}>จำนวนเงินทั้งหมด เมื่อผ่อนชำระครบ 5 ปี : {this.state.value * 60} บาท</Text>
      <Text style={styles.nameCar}>จำนวนเงินทั้งหมด เมื่อผ่อนชำระครบ 6 ปี : {this.state.value * 72} บาท</Text>
      <Text style={styles.nameCar}>จำนวนเงินทั้งหมด เมื่อผ่อนชำระครบ 7 ปี : {this.state.value * 84} บาท</Text>
      

    </View>


    
    );
  }
}
export default vat30per;
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
    fontSize: 14,
    color: 'black',
  },
  h1:{
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  h2:{
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  }
});