import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import { useState , useEffect} from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

function Player({section_code , items}) {

    const [loom , setLoom] = useState("");
    

    useEffect(() => {
        // Update the document title using the browser API
        
        // var loom = items.video_url.substring(0, 20);


       setLoom(items.video_url.substring(0, 20));
  
  
      },[]);


    return (
        <View style={styles.mycard}>
            <Text style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "600",
                marginVertical: 10,

            }}>{items.title}</Text>

            {
                loom == "https://www.loom.com" ? 
                
                
                // <Image style={{
                //     height:200,
                // }}  source={{uri: "https://res.cloudinary.com/edifice-solutions/image/upload/v1669715389/Screenshot_2022-11-28_at_10.29.32_PM_bvkkr0.png"}} resizeMethod="resize" resizeMode="contain" /> : 

                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(items.video_url)}>
                     <Image style={{
                     height:200,
                 }}  source={{uri: "https://res.cloudinary.com/edifice-solutions/image/upload/v1669715389/Screenshot_2022-11-28_at_10.29.32_PM_bvkkr0.png"}} resizeMethod="resize" resizeMode="contain" />

</TouchableOpacity>
            //     <Button
            //     title="Open URL with an in-app browser"
            //     onPress={() => WebBrowser.openBrowserAsync('https://expo.dev')}
            //     style={styles.button}
            //   />
              
               :
                <YoutubePlayer
                height={200}
                // play={playing}
                videoId={items.video_url.substring(17)}
                // onChangeState={onStateChange}
            />
            }

            

        </View>
    );
}

const styles = StyleSheet.create({
    
    mycard: {
        
        height:250,
        paddingHorizontal:12,
        paddingVertical:10,
        borderBottomColor:"grey",
                            borderBottomWidth:0.8,
                            marginBottom:12,

        
       
        
      
        
    }

})

export default Player;