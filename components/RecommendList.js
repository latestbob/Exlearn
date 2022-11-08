import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView , TextInput, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import RecommendCard from './RecommendCard';


function RecommendList({navigation}) {

    const [recommend , setRecommended] = useState([
        {
            "title":"Introduction to Html",
            "type":"Frontend",
            "level":"Beginner",
            "rating":"4.5",
            "payment":"Free",
            "amount":0,
           
        },
        {
            "title":"Introduction to CSS",
            "type":"Frontend",
            "level":"Beginner",
            "rating":"4.5",
            "payment":"Free",
            "amount":0
        },

        {
            "title":"Domain, Hosting Setup",
            "type":"Frontend",
            "level":"Intermediate",
            "rating":"5.0",
            "payment":"Paid",
            "amount":2000,
        },
        {
            "title":"WordPress for Beginners",
            "type":"WordPress",
            "level":"Beginner",
            "rating":"4.8",
            "payment":"Free",
            "amount":0
        },
    ]);
    return ( 
        <View style={styles.container}> 

                <ScrollView   showsHorizontalScrollIndicator={false} style={styles.myscroll} horizontal={true}>
               {/* <RecommendCard />
               <RecommendCard />
               <RecommendCard />
               <RecommendCard />
               <RecommendCard /> */}

               {
                   recommend.map(function(item, index){
                       return (
                        //    <RecommendCard items={item} key={index} />

                        <TouchableOpacity key={index} onPress={function(){
                           navigation.navigate('Course',{
                            itemId: 86,
                            otherParam: 'anything you want here'
                           });
                        }}>
                            <RecommendCard items={item}  />

                        </TouchableOpacity>
                       )
                   })
               }

                </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
       width:"100%",
       height:"40%",
    },

    myscroll :{
        flex:1,
    }
})
export default RecommendList;