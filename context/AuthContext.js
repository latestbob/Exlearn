import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({}); //create context

//this controller is used update the deliveryprice.

//default is 2000 naira

export const AuthContextProvider = function ({ children }) {
  const baseUrl = "https://7387-102-89-34-224.eu.ngrok.io/";
    //token



    // Search input value


    const [search , setSearched] = useState("");


    const [token , setToken] = useState(null);
    const [name , setName] = useState("john");
    const [username , setUsername] =useState("");
    const [email , setEmail] = useState("");


    //add token to local storage
    async function AddToStorage(value, e, u){
        try {
            await AsyncStorage.setItem('token', value);
            await AsyncStorage.setItem('email', e);
            await AsyncStorage.setItem('username', u);

            getToken();
            console.log(email)
          } catch (e) {
            console.log(e);
          }
    }

    //retrive token from local storage

    async function getToken(){
        try {
            const myvalue = await AsyncStorage.getItem('token');
            const myemail = await AsyncStorage.getItem('email');
            const myusername = await AsyncStorage.getItem('username');
            if(myvalue !== null) {
              setToken(myvalue);
              setEmail(myemail);
              setUsername(myusername);
              console.log(email)
              console.log(username)
            }
            else{
              setToken(null);
              setEmail("");
              setUsername("");
            }
          } catch(e) {
            // error reading value
            console.log(e);
          }
    }

     




    //remove token

async function removeToken(){
    try {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("email");
        await AsyncStorage.removeItem("username");

        setToken(null);
        setEmail("");
        setUsername("");
        console.log('working')
      } catch (e) {
        console.log(e);
      }
    }


   const value = {
         token,
        setToken,
        AddToStorage,
        getToken,
        removeToken,
        name,
        username,
        email,
        baseUrl,
        search,
        setSearched,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}