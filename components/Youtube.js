import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";

function Player({section_code , items}) {
    return (
        <View style={styles.mycard}>
            <Text style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "600",
                marginVertical: 10,

            }}>{items.title}</Text>



            <YoutubePlayer
                height={200}
                // play={playing}
                videoId={items.video_url.substring(17)}
            // onChangeState={onStateChange}
            />

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