import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView , TextInput, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import { useState,useEffect } from 'react';

import CourseSection from './CourseSection';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';



function CourseSectionList({navigation, coursecode, items}) {

    const {baseUrl} = React.useContext(AuthContext);
    useEffect(() => {
        // Update the document title using the browser API
        
        axios.get(`${baseUrl}api/sections/${coursecode}`, {

            

        }).then(response => {
           // console.log(response)
            //console.log(response.data)

            setSection(response.data)

          
        }).catch(error => {
            console.log(error)
        })



      },[]);
      const [sections , setSection] = useState([
        
    ]);

    return ( 
        

        <ScrollView   showsHorizontalScrollIndicator={false} style={styles.myscroll} >
       

       {
           sections.map(function(item, index){
               return (
                //    <RecommendCard items={item} key={index} />

                <TouchableOpacity style={{
                    marginVertical:5,
                }} key={index} onPress={function(){
                   navigation.navigate('Lessons',{
                       items:items,
                       section_code:`${item.section.section_code}`
                   });
                }}>
                    <CourseSection items={item}  />

                </TouchableOpacity>
               )
           })
       }

        </ScrollView>

     );
}


const styles = StyleSheet.create({
    

    myscroll :{
        
    }
})
export default CourseSectionList;