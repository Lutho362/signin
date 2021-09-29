import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Hyperlink from 'react-native-hyperlink';
import { firebase } from '../config/firebase';
export default function Display({ navigation }) {
  const [lists, setLists] = useState([]);

  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  const id = user.uid

  useEffect(() => {
    db.collection('Bookmark')
      .doc(id)
      .collection('tracks')
      .onSnapshot((snap) => {
        const lists = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLists(lists);
      });
  }, []);

  const handleDel = (idz) => {
    db.collection('Bookmark')
      .doc(id)
      .collection('tracks')
      .doc(idz)
      .delete()
      .then(() => {
        alert('Deleted successfully');
      });
  };

  const display = lists.map((track) => {
    return (
      <View key={track.song} style={styles.di}>
        <View style={{flexDirection: 'row',height:40,}}>
          <Text style={styles.text}>
            {track.song} by {track.artist}
          </Text>
          <TouchableOpacity
            style={styles.del}
            onPress={() => handleDel(track.id)}>
            <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>              
        <View style={{ flexDirection: 'row', height:30,}}>
          <Text style={{ fontSize: 12, width:205, paddingTop:5, }}>Released: {track.year}</Text>
          <TouchableOpacity
              style={styles.red}
              onPress={() =>
                navigation.navigate('Update', {
                  songId: track.id,
                  passedSong: track.song,
                  passedArtist: track.artist,
                  passedYear: track.year,
                  passedLink: track.musicLink,
                })
              }><FontAwesome name="edit" size={24} color="green" />
          </TouchableOpacity>
        </View>                                                                                                          
      </View>
    );
  });



  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <View style={styles.top}>
          <View style={styles.but}>
            <Text style={{ marginLeft: 195, fontSize: 20, fontWeight: 'bold' }}>  _ </Text>
            <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: 'bold' }}>
              [_]
            </Text>
            <TouchableOpacity style={{marginLeft:15, fontSize: 20 }} onPress={()=>navigation.navigate('SignIn')}>x</TouchableOpacity>
          </View>
          {/*handleView()*/}
        </View>
        <Text style={styles.head}>
          Please click on the edit icons to update and delete icon to delete
        </Text>
        <ScrollView style={{paddingBottom: 10}}>{display}</ScrollView>
        <Text style ={{paddingHorizontal:20, fontWeight:'bold', paddingBottom:10,}}>To LOGOUT click on the x button in the top-right corner</Text>
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
  text:{
    fontSize: 17, 
    fontWeight: 'bold', 
    width: 205,
  },
  head: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  link: {
    width: 25,
    height: 25,
    overflow: 'hidden',
    backgroundColor: 'black',
    borderRadius: 50,
    cursor: ' pointer ',
    marginRight: 10,
  },
  red: {
    width: 25,
    height: 25,
    overflow: 'hidden',
    cursor: ' pointer ',
    
    
  },
  del: {
    
    width: 25,
    height: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingBottom: 2,
    marginTop: 10,
  },
  di: {
    paddingBottom: 5,
    borderWidth: 4,
    borderColor: 'lightblue',
    marginTop: 10,
    width: 250,
    paddingLeft: 10,
  },

  login: {
    backgroundColor: 'white',
    height: 450,
    marginTop: 100,
    width: 300,
    alignItems: 'center',
  },
  top: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    height: 35,
    marginBottom: 20,
  },
  but: {
    flexDirection: 'row',
    paddingTop: 7,
    width: 300,
  },
});


{/*<Hyperlink style={styles.link} linkDefault={true}>
              {track.musicLink}
            </Hyperlink>
            */}
