import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView
} from 'react-native';
import RadioButton from 'radio-button-react-native';
let num1 = 99
let num2 = 1
let total = 0
var fname= ''
class registerStudent extends Component{
static navigationOptions = { header: null}
constructor(props) {
    super(props);
    this.state = {
        fname: '',
        lname: '',
        male: '',
        female: '',
        str:'',
        money: 0,
        inputMoney: 0,
                 };
  }
  handleOnPress(value){
    this.setState({value:value})
}
  moneyOnpress(){
  total = num1 + num2
  // this.state.str = this.state.fname + this.state.lname + this.state.value
}
  submitRegister(){
    total = num1 + num2
    // this.state.str = this.state.fname + this.state.lname + this.state.value
}
// () => this.props.navigation.navigate('showData')
  render() {
      return (
      <View style={styles.welcome}>
      <ScrollView>
        <Text style={styles.h1}>ShowRoom Car KMUTNB</Text>
        {/* <TextInput placeholder="Input First Name" onChangeText={(fname) => this.setState({fname})}/>
        <TextInput placeholder="Input Last Name" onChangeText={(lname) => this.setState({lname})}/>
        <RadioButton currentValue={this.state.value} value={'ชาย'} onPress={this.handleOnPress.bind(this)}>
                <Text> ชาย</Text>
        </RadioButton>
        <Text> </Text>
        <RadioButton currentValue={this.state.value} value={'หญิง'} onPress={this.handleOnPress.bind(this)}>
                <Text> หญิง</Text>
        </RadioButton>
        <Text> {this.state.value}</Text>
        <Text> {this.state.value}</Text>
        <Button onPress={this.submitRegister()} title="Press Me" />

        <Text> {total}</Text> */}
        
      <Image source={{uri: 'https://www.toyota.co.th/media/product/color/general/5627eb513af44cca6bc7c8fffb4967bb45745eaa0ec767dcfca77bfadc1721c2.png'}}
       style={{width: 400, height: 200}} />
      <Button title="Yaris 490,000 บาท"  color="#841584" onPress={() => this.props.navigation.navigate('yaris')}></Button>
        
      <Image source={{uri: 'http://www.arcticthailand.com/main/wp-content/uploads/2016/05/Toyota-vios-side-orange-metallic.png'}}
       style={{width: 400, height: 200}} />
      <Button title="Vios 670,000 บาท"  color="#841584" onPress={() => this.props.navigation.navigate('vios')}></Button>

      <Image source={{uri: 'https://www.toyota.co.th/media/product/color/general/1b43cb92578247eb73247fb9054ed4ab63b740792b2d6ac927fe99286d12c92a.png'}}
       style={{width: 400, height: 200}} />
       <Button title="Altis 999,000 บาท"  color="#841584" onPress={() => this.props.navigation.navigate('altis')}></Button>

       <Image source={{uri: 'http://car250.com/wp-content/uploads/2018/01/ENRY-1.png'}}
       style={{width: 400, height: 220}} />
       <Button title="C-HR 1,100,000 บาท"  color="#841584" onPress={() => this.props.navigation.navigate('chr')}></Button>

       <Image source={{uri: 'https://www.toyota.co.th/media/product/color/general/e25a455949df1d1a3e25460235f0ec14c3c6eab0bfcce853e346a386e8937b82.png'}}
       style={{width: 400, height: 200}} />
       <Button title="Camry 1,800,000 บาท"  color="#841584" onPress={() => this.props.navigation.navigate('camry')}></Button>
        
       {/* <Text style={styles.h1}>ระบุเงินดาวน์ (ไม่ต่ำกว่า 10%)</Text> 
       <TextInput placeholder="ระบุเงินดาวน์" onChangeText={(lname) => this.setState({lname})}/>
        <Button title="10%" onPress={this.moneyOnpress()}/>
        <Button title="15%" />
        <Button title="20%" />
        <Button title="25%" />
        <Button title="30%" />
       <Text> {this.state.value}</Text> */}
       </ScrollView>
      </View>
    );
  }
}
export default registerStudent;
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
    fontSize: 16,
    color: 'black',
  },
  h1:{
    fontSize: 24,
    textAlign: 'center',
    color: 'black',

  }
});
