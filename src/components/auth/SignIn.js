import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import userStore from '../../stores/user'
import {observer} from 'mobx-react'

@observer
export default class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

  render() {
    const {email, password} = this.state
    return (
      <View>
        <Text style={styles.header}>Please Sign In</Text>
        <Text>Email:</Text>
        <TextInput value={userStore.email} 
            onChangeText = {this.setEmail}
            style= {styles.input}
            keyboardType='default'/>
        <Text>Password</Text>
        <TextInput value={userStore.password} 
            onChangeText = {this.setPassword}
            style= {styles.input}
            secureTextEntry/>
        <TouchableOpacity onPress = {this.signIn}>
            <Text>Sign In</Text>
        </TouchableOpacity>    
      </View>
    );
  }
  signIn = () => {
      console.log('------', 'sign in')
  }
  setPassword = password => userStore.password = password
  setEmail = email => userStore.email = email
}

const styles = {
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        ...Platform.select({
            ios: {
                borderBottomColor: '#000',
                borderBottomWidth: 1
            },
            android: {

            }
        })
    }
}