import * as React from 'react';
import { Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Message')}
        title="Go to Profile Screen"
      />
      
     <TouchableOpacity style={{ alignItems: 'flex-end', margin: 16 }} onPress={() => navigation.toggleDrawer()}>
        <FontAwesome5 name='bars' size={24} color="#161924" />
      </TouchableOpacity>
    </View>
  );
}

export function MessageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'flex-end' }}>
      <Button
        onPress={() => navigation.goBack()}
        title="Go to Message Screen"
      />
    </View>
  );
}

export function ToggleButton ({navigation}){
return (
  <View style={{flex: 1, alignSelf: 'flex-end'}}>
          <TouchableOpacity style={{ alignItems: 'flex-end', margin: 16 }} onPress={() => navigation.toggleDrawer()}>
        <FontAwesome5 name='bars' size={24} color="#161924" />
      </TouchableOpacity>
  </View>
);
}