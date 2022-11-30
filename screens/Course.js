import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import CourseSection from '../components/CourseSection';
import CourseSectionList from '../components/CourseSectionList';

function Course({ route, navigation }) {
    const { items } = route.params;



    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.topbar}>
                <Ionicons onPress={function () {
                    // navigation.navigate('Main');
                    navigation.goBack();
                }} name="arrow-back" size={32} color="#615E5E" />
                <Text style={styles.topbarText}>Back</Text>
            </View>

            <View style={styles.imageView}>
                <Image style={styles.myimage} source={{ uri: items.image_url }} resizeMethod="resize" resizeMode="cover" />

            </View>



            <View style={{
                paddingHorizontal: 15,
            }}>

                <View style={styles.intro}>
                    <Text style={styles.intro_heading}>{items.title}</Text>

                    <View style={styles.intro_rate_type}>
                        <Text style={styles.intro_type}>{items.type} - {items.level}</Text>
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
                            }}>5.0</Text>
                        </View>


                        

                    </View>

                    {
                        items.payment_type == "Free" && <View style={styles.badge}>
                        <Text style={styles.badgeText}>{items.payment_type}</Text>
                    </View>
                    }

                    
                </View>

                <View style={styles.author}>

                    <Image style={{
                        width:80,
                        height:80
                    }} source={{uri:"https://edificesolutions.com.ng/assets/img/edifice%20solutions.PNG"  }} resizeMethod="resize" resizeMode="contain" />
                    
                    <View style={styles.authorText}>
                        
                        <View style={{
                            paddingHorizontal:20
                        }}>
                            <Text style={{fontWeight:"bold"}}>Tutor - {items.tutor}</Text>
                        <Text style={{fontSize:11}}>{items.tutor_description}</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                            paddingHorizontal:15,
                            paddingVertical:10,
                        }}>
                            <Text style={{
                                textAlign:"justify",
                                fontSize:12.
                            }}>{items.course_description}</Text>
                        </View>



                <View style={{marginVertical:20}}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:"bold"
                    }}>Course Sections</Text>
                </View>

                {/* <CourseSection /> */}
                <CourseSectionList items={items} coursecode={items.coursecode} navigation={navigation} />

                <View style={{
                    height:100,
                }}>

                </View>

            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    topbar: {

        borderBottomColor: "#A59F9F",
        borderBottomWidth: 0.5,
        flexDirection: "row",
        marginTop: 50,
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
    badgepaid:{
        backgroundColor:"red",
        paddingVertical:1,
        paddingHorizontal:10,
        borderRadius:20,
        width:"20%"

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