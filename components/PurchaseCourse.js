import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView , TextInput} from 'react-native';
import Logo from '../components/Logo';
import { useState } from 'react';


function PurchaseCourse({items}) {
    return ( 
        <View style={styles.recommended}>
        <View style={styles.imageview}>
            <Image style={styles.mainimage} source={{uri:items.image_url}} resizeMethod="resize" resizeMode="cover" />
        </View>

        <View style={styles.textdiv}>
            <Text style={styles.title}>{items.title}</Text>

            <Text style={styles.type}>{items.type} - {items.level}</Text>

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
                }}>5.0</Text>
            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
            }}>

{/* 30631 */}
           
            <View style={styles.badge}>
                <Text style={styles.badgeText}>Enrolled</Text>
            </View>

            {/* <View style={items.payment_type=="Free" ? {display:"none"} : {display:"flex"}} >
                 <Text style={{fontSize:16,fontWeight:"600"}}>N{items.amount}</Text>
            </View> */}

            </View>



        </View>



</View>
     );
}


const styles = StyleSheet.create({
    recommended:{
       width:220,
        backgroundColor:"white",
        marginHorizontal:15,
        borderWidth:0.4,
        borderColor:"#F1F2F5",

        flexDirection:"column"
        
     },

     imageview:{
         height:"50%",
         width:"100%",
        

     },

     textdiv:{
        height:"50%",
        width:"100%",
        backgroundColor:"white",
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:"column",
        justifyContent:"space-evenly"
     },

     mainimage:{
         width:"100%",
         height:"100%",
     },

     title:{
         fontWeight:"500",
         fontSize:15,
     },

     type :{
         fontSize:11,

     },

     badge:{
        backgroundColor:"#008000",
        paddingVertical:1,
        paddingHorizontal:10,
        borderRadius:20,
        width:"40%"

     },
     badgepaid:{
        backgroundColor:"red",
        paddingVertical:1,
        paddingHorizontal:10,
        borderRadius:20,
        width:"35%"

     },

     badgeText:{
        color:"white",
        fontSize:12,
        fontWeight:"600",
        textAlign:"center"
     }

})
export default PurchaseCourse;