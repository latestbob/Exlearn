import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView , TextInput, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';

import CourseSection from './CourseSection';



function CourseSectionList({navigation}) {
      const [sections , setSection] = useState([
        {
            "name":"Introducton to Course",
            "minutes":45,
           
        },
        {
            "name":"Scope of  Course",
            "minutes":120,
        },

        {
            "name":"Types of  Course",
            "minutes":180,
        },

        {
            "name":"Methods to Course",
            "minutes":120,
        },

        {
            "name":"Examples Course",
            "minutes":45,
        },
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
                   navigation.navigate('Lessons');
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