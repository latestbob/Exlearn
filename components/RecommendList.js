import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import { useState, useEffect } from 'react';
import RecommendCard from './RecommendCard';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';


function RecommendList({ navigation }) {
    const baseUrl = "https://ea81-197-210-28-251.eu.ngrok.io/";
    const {getToken, email, search, setSearched} = React.useContext(AuthContext);
    useEffect(() => {
        // Update the document title using the browser API

       
        getToken();
        axios.get(`${baseUrl}api/mycourse/${email}?search=${search}`, {

            

        }).then(response => {
            // console.log(response)
            //console.log(response.data)

            setRecommended(response.data)


        }).catch(error => {
            console.log(error)
        })



    }, [email, search]);


    const [recommend, setRecommended] = useState([
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

       <>
       {
           recommend && <View style={styles.container}>

           <ScrollView showsHorizontalScrollIndicator={false} style={styles.myscroll} horizontal={true}>
               {/* <RecommendCard />
              <RecommendCard />
              <RecommendCard />
              <RecommendCard />
              <RecommendCard /> */}

               {
                   recommend.map(function (item, index) {
                       return (
                           //    <RecommendCard items={item} key={index} />

                           <>
                               {
                                   item.course.payment_type == "Free" ? <TouchableOpacity key={index} onPress={function () {
                                       navigation.navigate('Course', {
                                           items: item.course,

                                       });
                                   }}>
                                       <RecommendCard key={index} items={item.course} />

                                   </TouchableOpacity> :

                                       <TouchableOpacity  onPress={function () {
                                           navigation.navigate('Payment', {
                                               items: item.course,

                                           });
                                       }}>
                                           <RecommendCard key={index} items={item.course} />

                                       </TouchableOpacity>
                               }

                           </>

                       )
                   })
               }

           </ScrollView>
       </View>
       }
       </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "40%",
    },

    myscroll: {
        flex: 1,
    }
})
export default RecommendList;