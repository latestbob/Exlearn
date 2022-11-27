import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import PurchaseList from '../components/PurchaseList';

function Purchase({navigation, route}) {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.topheader}>
                <Logo navigation={navigation} />

                <View style={styles.textview}>
                    <Text style={styles.textviewtext}>Shape your future with the right skills,</Text>
                       <Text style={styles.textviewtext}> Get industry based exposure</Text>
                </View>

              
            </View>
            <Text style={styles.recommend}>Your Purchased Courses</Text>

            {/* Free course */}

            <PurchaseList navigation={navigation} route={route}/> 
           
            



     





        </ScrollView>
    );
}

const styles = StyleSheet.create({

    freecontainer:{
        
        height:220,
        backgroundColor:"red",
        marginHorizontal:20,
        marginVertical:30,
        

    },
    topheader: {
        backgroundColor: "#0B1F48",


        height: "38%",
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
    recommend:{
        color:'black',
        fontWeight:"bold",
        fontSize:17,

        paddingHorizontal:15,
        paddingVertical:30,
    },
    // input: {
    //     margin: 15,
    //     height: 50,
       
    //    borderRadius:50,
    //     backgroundColor:"white",
    //     textAlign:"center",
    //     fontSize:17,
       
    //  },
    
   

})
export default Purchase;
