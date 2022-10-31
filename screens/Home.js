import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function Home() {
    return (  
        <View style={styles.container}>
            <Image source={{uri:'https://res.cloudinary.com/edifice-solutions/image/upload/v1667156113/edificesolutions-removebg-preview_vwy9lg.png'}}  style={styles.logo} resizeMode="contain" resizeMethod="resize" />

            <Text style={styles.introtext}>Inspiration comes from Learning, </Text>
            <Text style={styles.introtext}> Japa with Tech for FREE</Text>

            <View  style={styles.buttons}>
                <Text style={styles.buttontext}>Start Learning For Free</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        padding:30,
    },
    logo:{
        width:250,
        height:250,
    },
    introtext : {
        fontFamily:"Montserrat",
        fontSize:15,
        fontWeight:"500",
    },

    buttons :{
        backgroundColor:"#0B1F48",
        marginTop:100,
        width:"100%",
        padding:18,
        textAlign:"center",
        borderRadius:50,
       
    },
    buttontext:{
        color:"white",
        fontSize:18,
        // fontFamily:"Montserrat",
        textAlign:"center",
        fontWeight:"bold"
    }
})

export default Home;
