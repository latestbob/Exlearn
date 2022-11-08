import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Screens
// import Main from './screens/Main';

// import MyVideos from './screens/Myvideos';
// import Purchase from './screens/Purchase';
// import Profile from './screens/Profile';

import Main from '../screens/Main';
import MyVideos from '../screens/Myvideos';
import Purchase from '../screens/Purchase';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
function BottomNavigation() {


    return (  
         <Tab.Navigator
         initialRouteName="Main"
         
         screenOptions={({ route }) => ({
            
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Myvideos') {
              iconName = focused ? 'videocam' : 'videocam-outline';
            }

            else if (route.name === 'Purchase') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0B1F48',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
          
        })}>

        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Myvideos" component={MyVideos} />
        <Tab.Screen name="Purchase" component={Purchase} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator> 

    );
}

export default BottomNavigation;