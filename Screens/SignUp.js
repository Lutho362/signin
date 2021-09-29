import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {firebase} from '../config/firebase'
export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleBut = () => {
    let db = firebase.firestore()
    if (confirm!== password){
      alert("password doesn't match")
        setConfirm("")
        setEmail("")
    }else{
      firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        db.collection('users').doc(email).set({name, email, password, confirm})
        alert('Successfully added');
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage)
      });
      setName('')
    setConfirm('')
    setEmail('')
    setPassword('')
    }
    
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
            <TouchableOpacity style={{marginLeft:15, fontSize: 20 }} onPress={()=>navigation.navigate('SignIn')}>x</TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={(name) => setName(name)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}></TextInput>                {/* lutho@gmail.com    1234567 */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(pass) => setPassword(pass)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={(con) => setConfirm(con)}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => handleBut()}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
              Create Account
            </Text>
          </TouchableOpacity>
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
    width: 180,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
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
