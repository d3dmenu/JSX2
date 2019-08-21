import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Picker,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BMI from './components/BMI'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: 'Asian',
      weight: '',
      height: '',
      bmi: '',
    };
  }

  btnPress()
  {
    const bmi = new BMI();
    var w = Number(this.state.weight);
    var h = Number(this.state.height);
    var r = String(this.state.region);
    const calc = bmi.bmiCalculate(w, h)
    const reg = bmi.bmiRegion(calc, r)
    Alert.alert('BMI is: ' + calc.toString() + '\n' + 'Grade is: ' + reg.toString());
  }


  render() {
    return (
      <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Text style={styles.txt}>BMI Calculator </Text>
          <TextInput
            style={styles.txtIn2}
            placeholder="Weight"
            onChangeText={text => this.setState({ weight:text })}
          />

          <TextInput
            style={styles.txtIn2}
            placeholder="Height"
            onChangeText={text => this.setState({ height:text })}
          />

          
            <Picker
              selectedValue={this.state.region}
              style={styles.picker}  onValueChange={(itemValue, itemIndex) => this.setState({ region: itemValue })}
              >
              <Picker.Item label="Asian" value="Asian" />
              <Picker.Item label="Western" value="Western" />
             
            </Picker>
      

          <TouchableOpacity style={styles.viewBtn}>
            <Text
              style={styles.txt}
              onPress={() => this.btnPress()}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txtIn2: {
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  viewBtn: {
    height: 40,
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },

  picker: {
    height:40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  txt:{
    textAlign: 'center',
    fontSize: 20, 
    color: '#000000' 
  }
});