import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  row,
  TextInput
} from 'react-native';
let sumMoney = 0;
class yaris extends Component{
    constructor(props) {
        super(props);
        this.state = {
          inputMoney: 0,
 
                     };

        this.checkInputmoney = this.checkInputmoney.bind(this)
      }
    handleOnPress(value){
        this.setState({value:value})
    }
    checkInputmoney(){
      let inputMoney = parseFloat(this.state.inputMoney);
      if(inputMoney >= 49000){  
        alert('เงินดาวน์ถูกต้อง');
        this.props.navigation.navigate('showInput')
        sumMoney = sumMoney + inputMoney;
      }
      else{
        alert('เงินดาวน์น้อยกว่าที่กำหนด');
      }
        

    }
  render() {
    return (
      <View >
        <Text style={styles.h1}> Yaris</Text>
      <Image source={{uri: 'https://www.toyota.co.th/media/product/color/general/5627eb513af44cca6bc7c8fffb4967bb45745eaa0ec767dcfca77bfadc1721c2.png'}}
       style={{width: 450, height: 200}} />
      <Text style={styles.nameCar}>ราคา 490,000 บาท</Text>

      <TextInput style={{height: 60}}  
      placeholder="ระบุเงินดาวน์ (ไม่ต่ำกว่า 10% หรือ ไม่ตำกว่า 49,000)" 
      onChangeText={(inputMoney) => this.setState({inputMoney})} 
      keyboardType='numeric'  
      value={this.state.inputMoney}/>

     <Button title="ดาวน์" onPress={this.checkInputmoney}/>

      <Text  style={styles.nameCar}>เลือกเปอร์เซ็นต์เงินดาวน์</Text>
      
    
      <View style={{flex: 1, flexDirection: 'row'}}>

        <View style={{width: 70, height: 50}} >
        <Button title="10%"  color="#841584"  onPress={() => this.props.navigation.navigate('vat10per')}/>
        </View>
        <Text>  </Text>

        <View style={{width: 70, height: 50}} >
        <Button title="15%"  color="#841584" onPress={() => this.props.navigation.navigate('vat15per')} />
        </View>
        <Text>  </Text>

        <View style={{width: 70, height: 50}} >
        <Button title="20%"  color="#841584"   onPress={() => this.props.navigation.navigate('vat20per')} />
        </View>
        <Text>  </Text>

        <View style={{width: 70, height: 50}} >
        <Button title="25%"  color="#841584" onPress={() => this.props.navigation.navigate('vat25per')}/>
        </View>
        <Text>  </Text>

        <View style={{width: 70, height: 50}} >
        <Button title="30%"  color="#841584" onPress={() => this.props.navigation.navigate('vat30per')}/>
        </View>
       
      </View>
      
    </View>



    );
  }
}
export default yaris;
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
  moneyText:{
    flexDirection: row,
  },

});
export {sumMoney}