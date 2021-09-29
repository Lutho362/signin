import React, { useState } from 'react';
import Display from './Display';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { firebase } from '../config/firebase';
import { Entypo } from '@expo/vector-icons';
export default function Bookmark({ navigation }) {
  
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [musicLink, setMusicLink] = useState('');

  const handleButton = () => {
    if (song=='' || artist=='' || year=='' || musicLink==''){
      alert('please input something in the textboxes')
    }else{
      const user = firebase.auth().currentUser
      const id = user.uid
      const db = firebase.firestore();
      db.collection('Bookmark').doc(id).collection('tracks').add({song, artist, year, musicLink})
      alert('Added Successfully')
    }
    setSong('');
    setArtist('');                  {/*  lutho@gmail.com  lutho@gmail.comy */}
    setYear('');
    setMusicLink('');
  }; 
  
  return (
    <View style={styles.container}>
      <View style={styles.login}>

        <View style={styles.top}>
          <View style={styles.but}>
            <Text
              style={{
                marginTop: -5,
                marginLeft: 205,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              _
            </Text>
            <Text
              style={{
                
                marginLeft: 15,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {' '}
                                                                                                              {/*  lutho470@gmail.com   081049  */}
              [_]
            </Text>
            <TouchableOpacity style={{marginLeft:15, fontSize: 20 }} onPress={()=>navigation.navigate('SignIn')}>x</TouchableOpacity>
          </View>
        </View>
        <View style={styles.add}> 
          <Entypo name="add-to-list" size={37} color="black" color='lightblue'  />
          <Text style =  {styles.t}>Add Songs</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <TextInput
            style={styles.input}
            placeholder="Song Name"
            name= 'song'
            onChangeText={(song) => setSong(song)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Artist"
            name = 'artist'
            onChangeText={(artist) => setArtist(artist)}></TextInput>{' '}
          <TextInput
            style={styles.input}
            placeholder="Year Realeased"
            name = 'year'
            onChangeText={(year) => setYear(year)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Song Link"
            name = 'link'
            onChangeText={(link) => setMusicLink(link)}></TextInput>
          <View style={{ flexDirection: 'row', marginLeft: -10 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButton()}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                Add Song
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Display') }>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                View Songs
              </Text>
            </TouchableOpacity>
            
          </View>
          
        </View>
        <Text style ={{paddingHorizontal:30, fontWeight:'bold', paddingBottom:10, paddingVertical: 10}}>To LOGOUT click on the x button in the top-right corner</Text>
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
  t:{
    fontSize: 30, 
    fontWeight: 'bold', 
    marginLeft: 10, 
    color:'lightblue',
  },
  add:{
    marginTop:20,
    flexDirection: 'row'
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
    width: 115,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
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
