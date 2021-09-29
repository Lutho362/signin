import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Bookmark from "./Bookmark"
import { firebase } from '../config/firebase';
import { Entypo } from '@expo/vector-icons';
export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButton = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Signed in')
        navigation.navigate("Bookmark")
        })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
      
     
  };


  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <View style={styles.top}>
          <View style={styles.but}>
            <Text style={{ marginLeft: 210, fontSize: 20, fontWeight: 'bold' }}>
              _
            </Text>
            <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: 'bold' }}>
              [_]
            </Text>
            <Text style={{ marginLeft: 15, fontSize: 20 }}>x</Text>
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
        <View style={styles.log}>
          <Entypo name="login" size={55} color="black" color='lightblue' />
          <Text style =  {{fontSize: 25, fontWeight: 'bold', marginLeft: 10, color: 'lightblue',}}>Log In Page</Text>
        </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            name = 'email'
            onChangeText={(email) => setEmail(email)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            name = 'password'
            onChangeText={(pass) => setPassword(pass)}></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButton()}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
              Sign in
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.text}>Sign up</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  log:{
    
    alignItems: 'center',
    paddingBottom:15,
    flexDirection: 'row', 
    
  },
  text: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 2,
    marginTop: 10,
    width: 220,
    height: 35,
    padding: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    marginTop: 20,
    width: 150,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 33,
    borderRadius: 10,
  },

  login: {
    backgroundColor: 'white',
    height: 400,
    marginTop: 100,
    width: 300,
    alignItems: 'center',
  },
  top: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    height: 35,
  },
  but: {
    flexDirection: 'row',
    paddingTop: 7,
    width: 300,
  },
});
