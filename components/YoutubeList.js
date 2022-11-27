import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import { useState, useEffect } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import Player from './Youtube';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function PlayerList({section_code}) {

  const {baseUrl} = React.useContext(AuthContext);
  useEffect(() => {
      // Update the document title using the browser API
      
      axios.get(`${baseUrl}api/lessons/${section_code}`, {

          

      }).then(response => {
         // console.log(response)
          console.log(response.data)

          setLessons(response.data)

        
      }).catch(error => {
          console.log(error)
      })



    },[]);
    const [lessons , setLessons] = useState([
      
  ]);
    return ( 
        <ScrollView   showsHorizontalScrollIndicator={false}  >
       

        {
            lessons.map(function(item, index){
                return (
                 //    <RecommendCard items={item} key={index} />
 
                 <TouchableOpacity style={{
                     marginVertical:5,
                 }} key={index} onPress={function(){
                    
                 }}>
                     <Player section_code={section_code} items={item}  />
 
                 </TouchableOpacity>
                )
            })
        }

            {/* <TouchableOpacity style={{
                     marginVertical:5,
                 }}  onPress={function(){
                    
                 }}>
                     <Player section_code={section_code} />
 
                 </TouchableOpacity> */}
 
         </ScrollView>
     );
}

export default PlayerList;