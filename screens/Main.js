import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView , TextInput} from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';
import RecommendCard from '../components/RecommendCard';



function Main() {
    const [search, setSearched] = useState("");

function handleSearchInput(e){
    setSearched(e)
    console.log(search)
}
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.topheader}>
                <Logo />

                <View style={styles.textview}>
                    <Text style={styles.textviewtext}>Shape your future with the right skills,
                        The future is NOW</Text>
                </View>

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Seach Course"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {handleSearchInput}/>
            </View>

            {/* TEXT View */}

            <Text style={styles.recommend}>Recommended for you</Text>


            {/* Recommended for free */}

            {/* <View style={styles.recommended}>
                    <View style={styles.imageview}>
                        <Image style={styles.mainimage} source={{uri:"https://res.cloudinary.com/edifice-solutions/image/upload/v1667248341/Screenshot_2022-10-30_at_6.14.15_PM_vat5rv.png"}} resizeMethod="resize" resizeMode="cover" />
                    </View>

                    <View style={styles.textdiv}>
                        <Text style={styles.title}>Introduction to HTML</Text>

                        <Text style={styles.type}>Frontend - Beginner</Text>

                        <View style={{
                            flexDirection:"row"
                        }}>
                            <Image style={{
                                width:20,
                                height:20
                            }} source={{uri:"https://res.cloudinary.com/edifice-solutions/image/upload/v1667248914/Vector_jculwj.png"}} resizeMethod="resize" resizeMode="contain" />

                            <Text style={{
                                fontSize:15,
                                fontWeight:"bold"
                            }}>4.5</Text>
                        </View>


                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>Free</Text>
                        </View>

                    </View>
            


            </View> */}

            <RecommendCard />






        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topheader: {
        backgroundColor: "#0B1F48",


        height: "40%",
        padding: 30,
        flexDirection:'column',
        justifyContent:"space-evenly"
    },

    textview :{
        textAlign:"center",
        paddingVertical:15,
    },

    textviewtext:{
        color:"white",
        fontSize:16,
        fontWeight:"500",
        textAlign:"center"
    },
    input: {
        margin: 15,
        height: 50,
       
       borderRadius:50,
        backgroundColor:"white",
        textAlign:"center",
        fontSize:17,
       
     },

     recommend:{
         color:'black',
         fontWeight:"bold",
         fontSize:17,

         padding:15
     },

    //  recommended:{
    //     width:"60%",
    //     height:"35%",
    //     backgroundColor:"white",
    //     marginHorizontal:15,
    //     borderWidth:0.4,
    //     borderColor:"#F1F2F5",

    //     flexDirection:"column"
        
    //  },

    //  imageview:{
    //      height:"50%",
    //      width:"100%",
        

    //  },

    //  textdiv:{
    //     height:"50%",
    //     width:"100%",
    //     backgroundColor:"white",
    //     paddingVertical:10,
    //     paddingHorizontal:10,
    //     flexDirection:"column",
    //     justifyContent:"space-evenly"
    //  },

    //  mainimage:{
    //      width:"100%",
    //      height:"100%",
    //  },

    //  title:{
    //      fontWeight:"500",
    //      fontSize:15,
    //  },

    //  type :{
    //      fontSize:11,

    //  },

    //  badge:{
    //     backgroundColor:"#008000",
    //     paddingVertical:1,
    //     paddingHorizontal:10,
    //     borderRadius:20,
    //     width:"35%"

    //  },

    //  badgeText:{
    //     color:"white",
    //     fontSize:13,
    //     fontWeight:"600",
    //     textAlign:"center"
    //  }


});
export default Main;