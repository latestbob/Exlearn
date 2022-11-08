import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput, SafeAreaView, } from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import CourseSection from '../components/CourseSection';
import CourseSectionList from '../components/CourseSectionList';




function Lessons({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.myscroll} >
                <View style={styles.topbar}>
                    <Ionicons onPress={function () {
                        navigation.navigate('Course');
                    }} name="arrow-back" size={32} color="#615E5E" />
                    <Text style={styles.topbarText}>Back</Text>
                </View>

                <View style={styles.card}>

                    <Text>Title of the Card</Text>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topbar: {

        borderBottomColor: "#A59F9F",
        borderBottomWidth: 0.5,
        flexDirection: "row",
        marginTop: 10,
        paddingHorizontal: 15,
    },
    topbarText: {
        color: "black",
        fontSize: 17,
        marginHorizontal: 20,

    },
    card: {

    }

})

export default Lessons;