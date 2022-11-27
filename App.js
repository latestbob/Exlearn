import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
// Screens

import AuthStack from './components/AuthStack';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';

import { AuthContextProvider } from './context/AuthContext';
import { AuthContext } from './context/AuthContext';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Navigations from './components/Navigations';


// const Stack = createNativeStackNavigator();


export default function App() {
  
  // const {token , name} = React.useContext(AuthContext);
  //  const [mytoken, setMyToken] = useState(null);


//   async function getToken(){
//     try {
//         const myvalue = await AsyncStorage.getItem('token')
//         if(myvalue !== null) {
//           setMyToken(myvalue)

//         }
//       } catch(e) {
//         // error reading value
//         console.log(e);
//       }
// }
  
    //   useEffect(() => {
    //   // Update the document title using the browser API
      
    //     getToken();
    //     console.log(token)
    //     console.log(name)


    // },[token]);
    
  
  return (
    // <View style={styles.container}>

    //   <Home/>
      
    //   <StatusBar style="auto" />
    // </View>
    
    <NavigationContainer>
      <AuthContextProvider>
          <Navigations />
       </AuthContextProvider>
       

       
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
});
