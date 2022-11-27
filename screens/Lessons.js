import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput, SafeAreaView, } from 'react-native';
import Logo from '../components/Logo';
import { useState , useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import Player from '../components/Youtube';
import PlayerList from '../components/YoutubeList';




function Lessons({ navigation, route }) {
    const { items , section_code } = route.params;
    const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});

//   const baseUrl = "https://34d8-105-112-150-223.eu.ngrok.io/";
//   useEffect(() => {
//       // Update the document title using the browser API
      
//       axios.get(`${baseUrl}api/lessons/${section_code}`, {

          

//       }).then(response => {
//          // console.log(response)
//           console.log(response.data)

//           setLessons(response.data)

        
//       }).catch(error => {
//           console.log(error)
//       })



//     },[]);
//     const [lessons , setLessons] = useState([
      
//   ]);

    return (
        <SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.myscroll} >
                <View style={styles.topbar}>
                    <Ionicons onPress={function () {
                        navigation.navigate('Course',{
                            items:items
                        });
                    }} name="arrow-back" size={32} color="#615E5E" />
                    <Text style={styles.topbarText}>Back</Text>
                </View>

                <PlayerList section_code={section_code} />

                {/* <View style={styles.mycard}>
                        <Text style={{
                            textAlign:"center",
                            fontSize:15,
                            fontWeight:"600",
                            marginVertical:10,
                            
                        }}>Title of the Lesson</Text>
                    
                    

                                <YoutubePlayer
                            height={200}
                            // play={playing}
                            videoId={"a_TOaeBwZrs"}
                            // onChangeState={onStateChange}
                        />
                    
                </View>
                */}


               
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
    mycard: {
        
        height:250,
        paddingHorizontal:12,
        paddingVertical:10,
        borderBottomColor:"grey",
                            borderBottomWidth:0.8,
                            marginBottom:12,

        
       
        
      
        
    }

})

export default Lessons;