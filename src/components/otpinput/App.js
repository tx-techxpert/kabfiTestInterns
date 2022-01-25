import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

import OTPTextView from 'react-native-otp-textinput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '60%',
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
  },
});

export default class App extends Component {
  state = {
    otpInput: '',
    inputText: '',
  };

  alertText = () => {
    const {otpInput = ''} = this.state;
    if (otpInput) {
      Alert.alert(otpInput);
    }
  };

  clear = () => {
    this.input1.clear();
  };

  updateOtpText = () => {
    // will automatically trigger handleOnTextChange callback passed
    this.input1.setValue(this.state.inputText);
  };

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <OTPTextView
          ref={e => (this.input1 = e)}
          containerStyle={{}}
          handleTextChange={text => this.setState({otpInput: text})}
          inputCount={4}
          keyboardType="numeric"
          tintColor="#FCB040"
          offTintColor="#C3C7CA"
        />
      </View>
    );
  }
}
