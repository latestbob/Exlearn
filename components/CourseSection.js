import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView , TextInput,} from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


function CourseSection({items}) {

  

    

        return (
            <View style={styles.container}>
            <Ionicons style={{
                paddingHorizontal:20,
            }} onPress={function () {
                    
                }} name="videocam" size={32} color="white" />

                <View>
                    <Text style={{
                        color:"white",
                        fontSize:16,
                        fontWeight:"700"
                        }}>{items.name}</Text>
                    <Text style={{
                        fontSize:11,
                        color:"white"
                    }}>{items.minutes}Mins</Text>
                </View>
        </View>
    
        );
       
        
}
const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor:"#0B1F48",
        borderRadius:5,
        flexDirection:"row",
        
        alignItems:"center"
    }
})

export default CourseSection;