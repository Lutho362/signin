import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import Bookmark from './Screens/Bookmark'
import Display from './Screens/Display'
import Update from './Screens/Update'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Bookmark" component={Bookmark} />
        <Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack
