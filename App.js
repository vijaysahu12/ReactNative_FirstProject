// import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Dimensions } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ProfileScreen, MessageScreen } from './screens/SideBar/Index'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from "@expo/vector-icons";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Drawer = createDrawerNavigator();

// export default function App() {
//   return (

//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Profile">
//         <Drawer.Screen name="Profile" component ={ProfileScreen} />
//         <Drawer.Screen name="Message" component={MessageScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>

//   );
// }
import { DrawerContent } from './screens/SideBar/DrawerContent'

const Stack = createStackNavigator();
 
export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

        <NavigationContainer style={{width: '500'}} linking={LinkingConfiguration}>
          <Drawer.Navigator initialRouteName="Profile" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Profile" component={ProfileScreen} style={{height: '50'}} />
            <Drawer.Screen name="Message" component={Root} />
          </Drawer.Navigator>

        </NavigationContainer>
      </View>
    );
  }
}

function Root() {
  return (
    <Stack.Navigator screenOptions={({navigation}) => ({
      headerLeft: () => (
        <FontAwesome5 name="bars" style={{marginLeft:10, size: 30}} onPress = {() => navigation.toggleDrawer()} />
      )
    })}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
