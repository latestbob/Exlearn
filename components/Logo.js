import React from 'react';
import { View, Text, Button, StyleSheet, Image , ScrollView } from 'react-native';


function Logo() {
    return (  
        <View style={styles.logo}>
            <Text style={styles.logoText}>ExLearn</Text>
            <Image source={{uri:"https://res.cloudinary.com/edifice-solutions/image/upload/v1667167262/Group_2_vzgmhw.png"}} style={styles.logoimage} resizeMethod="resize" resizeMode="contain" />
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        padding:5,
        flexDirection:"row",
        justifyContent:'space-between'
    },
    logoText :{
        fontSize:25,
        color:"white",
        fontWeight:"bold",
        
        
    },
    logoimage:{
        width:40,
        height:40
    }
})
export default Logo;