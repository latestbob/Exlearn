import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
// Screens
import Main from './screens/Main';
import Course from './screens/Course';
import MyVideos from './screens/Myvideos';
import Purchase from './screens/Purchase';
import Profile from './screens/Profile';
import Lessons from './screens/Lessons';

import BottomNavigation from './components/BottomNavigation';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // <View style={styles.container}>

    //   <Home/>
      
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
       <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="Main" component={Main} /> */}
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="Course" component={Course}/>
          <Stack.Screen name="Lessons"component={Lessons} />

          
          
       </Stack.Navigator>
       

       
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
});
