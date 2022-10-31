import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './screens/Main';


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
          <Stack.Screen name="Main" component={Main} />
          
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
});
