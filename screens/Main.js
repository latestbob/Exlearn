import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView , TextInput} from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';



function Main() {
    const [search, setSearched] = useState("");

function handleSearchInput(e){
    setSearched(e)
    console.log(search)
}
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.topheader}>
                <Logo />

                <View style={styles.textview}>
                    <Text style={styles.textviewtext}>Shape your future with the right skills,
                        The future is NOW</Text>
                </View>

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Seach Course"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {handleSearchInput}/>
            </View>

            {/* TEXT View */}






        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topheader: {
        backgroundColor: "#0B1F48",


        height: "40%",
        padding: 30,
        flexDirection:'column',
        justifyContent:"space-evenly"
    },

    textview :{
        textAlign:"center",
        paddingVertical:15,
    },

    textviewtext:{
        color:"white",
        fontSize:16,
        fontWeight:"500",
        textAlign:"center"
    },
    input: {
        margin: 15,
        height: 50,
       
       borderRadius:50,
        backgroundColor:"white",
        textAlign:"center",
        fontSize:17,
       
     },


});
export default Main;