import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Share } from 'react-native';
import Logo from '../components/Logo';
import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';


function Profile({navigation}) {

    const {email, username, getToken, removeToken} = React.useContext(AuthContext);

    useEffect(() => {
        // Update the document title using the browser API
        
        
          getToken();
          console.log("username is " + username);
          console.log("Email is " + email)
  
  
      },[]);

      const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Hi, I"ve found something awesome, try ExLearn.',
              url:"https://exlearn.online"
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.topheader}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>ExLearn</Text>
                    {/* <Image source={{uri:"https://res.cloudinary.com/edifice-solutions/image/upload/v1667167262/Group_2_vzgmhw.png"}} style={styles.logoimage} resizeMethod="resize" resizeMode="contain" /> */}
                    
                </View>

                <View style={styles.profile}>
                    <View style={{
                        height: 70,
                        width: 70,
                        backgroundColor: "white",
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                        <Ionicons style={{

                        }} name="person" size={50} color="#0B1F48" />

                    </View>

                    <View style={{
                        marginHorizontal: 20,
                    }}>

                    </View>

                    <View style={{
                        justifyContent: "center",
                        alignItems: "start",

                    }}>
                        <Text style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>{username}</Text>
                        <Text style={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: "500"
                        }}>{email}</Text>
                    </View>
                </View>

            </View>


            <View style={styles.sidebar}>

                        {/* Favourites */}
                {/* <View style={styles.sidebarView}>
                    <Ionicons style={{

                    }} name="heart-outline" size={30} color="purple" />

                    <Text style={styles.sideBarText}>Your Favourite</Text>
                </View> */}

                {/* Purchase Course */}
                <TouchableOpacity onPress={function(){
                    navigation.navigate("Purchase");
                }}>
                <View style={styles.sidebarView}>
                    <Ionicons style={{

                    }} name="videocam-outline" size={30} color="green" />

                    <Text style={styles.sideBarText}>My Courses</Text>
                </View>
                </TouchableOpacity>

                {/* Share  */}
                
                <TouchableOpacity onPress={onShare}>
                <View style={styles.sidebarView}>
                    <Ionicons style={{

                    }} name="share-social-outline" size={30} color="blue" />

                    <Text style={styles.sideBarText}>Tell A Friend</Text>
                </View>
                    </TouchableOpacity>

                    {/* Feedback */}

            <TouchableOpacity onPress={function(){
                navigation.navigate("Feedback");
            }}>

                <View style={styles.sidebarView}>
                    <Ionicons style={{

                    }} name="mail-open-outline" size={30} color="grey" />

                    <Text style={styles.sideBarText}>Feedback</Text>
                </View>
                </TouchableOpacity>

                 {/* Settings */}

                 <View style={styles.sidebarView}>
                    <Ionicons style={{

                    }} name="settings-outline" size={30} color="#FFAF19" />

                    <Text style={styles.sideBarText}>Settings</Text>

                    <Text style={{
                        color:"orange",
                        fontSize:14,
                        fontWeight:"bold",
                        marginLeft:100,
                    }}>Coming Soon</Text>
                </View>


                 {/* Logout */}

                    <TouchableOpacity onPress={removeToken}>
                    <View  style={styles.sidebarView}>
                    <Ionicons  style={{

                    }} name="log-out-outline" size={30} color="orangered" />

                    <Text style={styles.sideBarText}>Logout</Text>
                </View>
                    </TouchableOpacity>
                 
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topheader: {
        backgroundColor: "#0B1F48",


        height: "35%",
        paddingVertical: 30,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: "space-evenly"
    },

    logo: {
        padding: 5,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    logoText: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",


    },
    logoimage: {
        width: 40,
        height: 40
    },

    profile: {
        flexDirection: "row",
        justifyContent: "start",

    },
    sidebar: {
        marginVertical:40,
        paddingHorizontal:20,
    },

    sidebarView:{
        flexDirection:"row",
                    alignItems:"center",
                    paddingVertical:12,
                    borderBottomWidth:0.6,
                    borderBottomColor:"#D2D5E1"
    },

    sideBarText:{
        fontSize:17,
                        color:"#0B1F48",
                        fontWeight:"500",
                        marginLeft:30,
    },
})
export default Profile;
