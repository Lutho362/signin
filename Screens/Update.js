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
export default function Update({ route, navigation }) {
  
  {/*const {songId} = route.params
  const {passedSong} = route.params
  const {passedArtist} = route.params
  const {passedYear} = route.params
  const {passedLink} = route.params*/}


  const user = firebase.auth().currentUser
  const id = user.uid
  const db = firebase.firestore()
  

  const [song, setSong] = useState(route.params.passedSong);
  const [artist, setArtist] = useState(route.params.passedArtist);
  const [year, setYear] = useState(route.params.passedYear);
  const [musicLink, setMusicLink] = useState(route.params.passedLink);

  
  const handleUpdate = () =>{
    db.collection('Bookmark').doc(id).collection('tracks').doc(route.params.songId).update({
      song:song,
      artist: artist,
      year: year,
      musicLink: musicLink
    }).then(()=>{
      alert('Updated successfully')
    }).catch(error=>{console.log(error)})
    navigation.navigate('Display')
  }

  return(
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
            placeholder="Update name of the song"
            value = {song}
            onChangeText={(son) => setSong(son)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Update artist"
            value = {artist}
            onChangeText={(art) => setArtist(art)}></TextInput>                {/* lutho@gmail.com    1234567 */}
          <TextInput
            style={styles.input}
            placeholder="Update year"
            value = {year}
            onChangeText={(yer) => setYear(yer)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Update Link"
            value = {musicLink}
            onChangeText={(link) => setMusicLink(link)}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => handleUpdate()}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
              Update Details
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  )
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

