import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AboutScreen from '../screens/AboutScreen';
import CustomSliderScreen from '../screens/CustomSliderScreen';
import ChatScreen from '../screens/ChatScreen';
import { ProfileScreen } from '../screens/SideBar/Index';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route)});

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={LinksScreen}
        options={{
          title: 'Setting',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-settings" />,
        }}
      />
       <BottomTab.Screen
        name="slider"
        component={CustomSliderScreen}
        options={{
          title: 'Slider',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-hammer" />,
        }}
      /> 
      <BottomTab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        title: 'Chat',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,
      }}
      
    />
      <BottomTab.Screen
      name="Root"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-male" />,
      }}
      
    />
    
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
      case 'Home':
        return 'Home';
      case 'Setting':
        return 'Settings';
      case 'About':
        return 'About';
      case 'Slider':
        return 'Slider';
      case 'Chat':
        return 'Chat';
      case 'Root':
        return 'Root';
  }
}
