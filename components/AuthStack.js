import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';
// Screens

import Course from '../screens/Course';
import Lessons from '../screens/Lessons';

import BottomNavigation from './BottomNavigation';
import Payment from '../screens/Payment';
import Feedback from '../screens/Feedback';

const Stack = createNativeStackNavigator();
function AuthStack() {
    return (  
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="Course" component={Course}/>
          <Stack.Screen name="Lessons"component={Lessons} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Feedback" component={Feedback} />
        </Stack.Navigator>
    );
}

export default AuthStack;