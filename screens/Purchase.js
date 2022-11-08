import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


function Purchase() {
    return ( 
        <View style={styles.container}>
            <Text>This is my Videos screen</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:40,
        paddingHorizontal:20
    }
})
export default Purchase;
