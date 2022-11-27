import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';
import Forget from '../screens/auth/Forget';
import ResetPassword from '../screens/auth/ResetPasswor';

const Stack = createNativeStackNavigator();

function Navigations() {
    const {token , setToken, getToken, email} = React.useContext(AuthContext);

  useEffect(() => {
      // Update the document title using the browser API
      
      
        getToken();
        console.log(token);


    },[email]);

    return ( 
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
                  
                  {
                    token == null ? (
                      <>
                      <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
                  <Stack.Screen name="Forget" component={Forget} />
                  <Stack.Screen name="ResetPassword" component={ResetPassword} />
                 
                      </>
                    ) : (
                      <>
                      <Stack.Screen name="AuthStack" component={AuthStack}/>
                      </>
                    )
                  }
        
        
                  
        
                  {/* Authenticated Users will see this */}
                  
        
                  
                  
               </Stack.Navigator>
            
            
     );
}

export default Navigations;