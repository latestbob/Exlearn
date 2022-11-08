import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import CourseSection from '../components/CourseSection';
import CourseSectionList from '../components/CourseSectionList';

function Course({ navigation }) {
    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.topbar}>
                <Ionicons onPress={function () {
                    navigation.navigate('Main');
                }} name="arrow-back" size={32} color="#615E5E" />
                <Text style={styles.topbarText}>Back Home</Text>
            </View>

            <View style={styles.imageView}>
                <Image style={styles.myimage} source={{ uri: "https://res.cloudinary.com/edifice-solutions/image/upload/v1667248341/Screenshot_2022-10-30_at_6.14.15_PM_vat5rv.png" }} resizeMethod="resize" resizeMode="cover" />

            </View>



            <View style={{
                paddingHorizontal: 15,
            }}>

                <View style={styles.intro}>
                    <Text style={styles.intro_heading}>Introduction to HTML</Text>

                    <View style={styles.intro_rate_type}>
                        <Text style={styles.intro_type}>Frontend - Beginner</Text>
                        <View style={styles.intro_rate}>
                            <Image style={{
                                width: 20,
                                height: 20,
                                marginLeft:15,
                                marginRight:10
                            }} source={{ uri: "https://res.cloudinary.com/edifice-solutions/image/upload/v1667248914/Vector_jculwj.png" }} resizeMethod="resize" resizeMode="contain" />

                            <Text style={{
                                fontSize: 15,
                                fontWeight: "bold"
                            }}>4.5</Text>
                        </View>


                        

                    </View>

                    <View style={styles.badge}>
                            <Text style={styles.badgeText}>Free</Text>
                        </View>
                </View>

                <View style={styles.author}>

                    <Image style={{
                        width:80,
                        height:80
                    }} source={{uri:"https://edificesolutions.com.ng/assets/img/edifice%20solutions.PNG"  }} resizeMethod="resize" resizeMode="contain" />
                    
                    <View style={styles.authorText}>
                        <Text style={{fontWeight:"bold"}}>Tutor - Bobson Edidiong Anthony</Text>
                        <Text style={{fontSize:11}}>CEO Exlearn, Senior Software Engineer</Text>
                    </View>
                </View>



                <View style={{marginVertical:20}}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:"bold"
                    }}>Course Sections</Text>
                </View>

                {/* <CourseSection /> */}
                <CourseSectionList navigation={navigation} />

            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    topbar: {

        borderBottomColor: "#A59F9F",
        borderBottomWidth: 0.5,
        flexDirection: "row",
        marginTop: 30,
        paddingHorizontal: 15,
    },
    topbarText: {
        color: "black",
        fontSize: 17,
        marginHorizontal: 20,

    },

    imageView: {
        // width:"100%",
        height: "30%",

        margin: 15,

    },

    myimage: {
        width: "100%",
        height: 200,
        borderRadius: 20,
    },

    intro: {
        height: 100,
        
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderBottomColor: "#A59F9F",
        borderBottomWidth: 0.5,

    },
    intro_heading: {
        fontSize:17,
        fontWeight:"bold"
    },
    intro_rate_type: {
        flexDirection:"row"
    },
    intro_type: {
        fontSize:12,
    },
    intro_rate: {
        flexDirection:"row"
    },
    badge: {
        backgroundColor: "#008000",
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: "20%"

    },

    badgeText: {
        color: "white",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },

    author:{
        height: 80,
        
    
        borderBottomColor: "#A59F9F",
        borderBottomWidth: 0.5,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },

    
})

export default Course;