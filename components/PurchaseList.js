import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView , TextInput, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import { useState, useEffect } from 'react';

import axios from 'axios';
import PurchaseCourse from './PurchaseCourse';
import { AuthContext } from '../context/AuthContext';


function PurchaseList({navigation}) {

    const {getToken, email} = React.useContext(AuthContext);
    const baseUrl = "https://ea81-197-210-28-251.eu.ngrok.io/";
    useEffect(() => {
        // Update the document title using the browser API
        getToken();
        
        axios.get(`${baseUrl}api/purchased/${email}`, {

            

        }).then(response => {
           // console.log(response)
            //console.log(response.data)

            setRecommended(response.data)

          
        }).catch(error => {
            console.log(error)
        })



      },[email]);
    

    const [recommend , setRecommended] = useState([
        // {
        //     "title":"Introduction to Html",
        //     "type":"Frontend",
        //     "level":"Beginner",
        //     "rating":"4.5",
        //     "payment":"Free",
        //     "amount":0,
           
        // },
        // {
        //     "title":"Introduction to CSS",
        //     "type":"Frontend",
        //     "level":"Beginner",
        //     "rating":"4.5",
        //     "payment":"Free",
        //     "amount":0
        // },

        // {
        //     "title":"Domain, Hosting Setup",
        //     "type":"Frontend",
        //     "level":"Intermediate",
        //     "rating":"5.0",
        //     "payment":"Paid",
        //     "amount":2000,
        // },
        // {
        //     "title":"WordPress for Beginners",
        //     "type":"WordPress",
        //     "level":"Beginner",
        //     "rating":"4.8",
        //     "payment":"Free",
        //     "amount":0
        // },
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
                            items: item.course,
                            
                           });
                        }}>
                            <   PurchaseCourse key={index} items={item.course}  />

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
export default PurchaseList;