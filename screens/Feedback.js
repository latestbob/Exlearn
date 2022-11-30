import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Logo from '../components/Logo';
import { useState , useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import CourseSection from '../components/CourseSection';
import CourseSectionList from '../components/CourseSectionList';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';


function Feedback({ route, navigation }) {
    

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0


    const [isLoading, setLoading] = useState(false);

    const {email, getToken, baseUrl} = React.useContext(AuthContext);

    useEffect(() => {
        // Update the document title using the browser API
        
        
          getToken();
        
  
  
      },[]);

    
    return (

        <>
        
        {isLoading ? <View style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ActivityIndicator size="large" />
            </View> :   <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset} >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.topbar}>
                <Ionicons onPress={function () {
                    // navigation.navigate('Main');
                    navigation.goBack();
                }} name="arrow-back" size={32} color="#615E5E" />
                <Text style={styles.topbarText}>Back</Text>
            </View>

            <View style={styles.imageView}>
                <Image style={styles.myimage} source={{ uri: "https://res.cloudinary.com/edifice-solutions/image/upload/v1669806683/feedback_e04nni.png"}} resizeMethod="resize" resizeMode="cover" />

            </View>

            <Formik 
            initialValues={{ feedback: '', }}
            onSubmit={function(values){
                //console.log(values.feedback)
               setLoading(true);
                
                axios.post(`${baseUrl}api/feedback`, {

                    "email":email,
                    "feedback":values.feedback

                }).then(response => {
                   console.log(response)
                    console.log(response.data)
                    //console.log(response.data.token)
        
                    setLoading(false);
                    //  console.log(response.data.user.name);
                  
                    // navigation.navigate("AuthStack");
                   
                    alert(response.data.message);
                    navigation.navigate("Profile");


                  
                }).catch(error => {
                    //console.log(error)

                    if (error.response) {
                        
                        console.log(error.response.data.status);
                        if(error.response.data.status == "failed"){
                            setLoading(false);
                            //alert(error.response.data);
                            alert(error.response.data.message)
                           
                          
                        }
                    }
                })
            }}
            validate={function (values) {



             
                const errors = {};

                if (!values.feedback) {
                    errors.feedback = 'Feedback Content is required';
                } 
                return errors;
               
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop:50,
                   
                }}>
                    <View style={styles.input}>
                    <TextInput style={{
                        flex:1,
                        textAlign:"center",
                        fontSize:17,
                        paddingHorizontal:20,
                       
                    }}
                        onChangeText={handleChange('feedback')}
                        onBlur={handleBlur('feedback')}
                        value={values.feedback}
                        placeholder="Write Us your feedback, we appreciate feedbacks"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        multiline
                        

                       
                    />
                   
                    </View>
                    {errors.feedback && touched.feedback ? <Text style={{
                        color:"red",
                        fontWeight:"500"
                    }}>{errors.feedback}</Text> : null}

         
                    
                    
                    {/* <Button onPress={handleSubmit} title="Submit" /> */}

                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={{
                            backgroundColor: "orange",
                            height: 54,
                            borderRadius: 30,
                            justifyContent: "center",
                            alignItems: "center"

                        }}>
                            <Text style={{
                                fontWeight: "800",
                                fontSize: 18,
                                textAlign: "center",
                                color: "black",
                                letterSpacing: 2,

                            }}>Submit Feedback</Text>
                        </View>
                    </TouchableOpacity>


                    
                </View>
            )}
        </Formik>



            
        </ScrollView>
        </KeyboardAvoidingView>
            
        
        }
        
        </>
      
    );
}


const styles = StyleSheet.create({
    topbar: {

        borderBottomColor: "#A59F9F",
        borderBottomWidth: 0.5,
        flexDirection: "row",
        marginTop: 50,
        paddingHorizontal: 15,
    },
    topbarText: {
        color: "black",
        fontSize: 17,
        marginHorizontal: 20,

    },

    imageView: {
        // width:"100%",
        height: "30%",

        margin: 15,

    },

    myimage: {
        width: "100%",
        height: 200,
        borderRadius: 20,
    },

    intro: {
        height: 100,
        
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderBottomColor: "#A59F9F",
        borderBottomWidth: 0.5,

    },
    intro_heading: {
        fontSize:17,
        fontWeight:"bold"
    },
    intro_rate_type: {
        flexDirection:"row"
    },
    intro_type: {
        fontSize:12,
    },
    intro_rate: {
        flexDirection:"row"
    },
    badge: {
        backgroundColor: "#008000",
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: "20%"

    },

    badgeText: {
        color: "white",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    badgepaid:{
        backgroundColor:"red",
        paddingVertical:1,
        paddingHorizontal:10,
        borderRadius:20,
        width:"20%"

     },

    author:{
        height: 80,
        
    
        borderBottomColor: "#A59F9F",
        borderBottomWidth: 0.5,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    input: {

       minHeight:100,

        borderRadius: 20,
        backgroundColor: "white",
        textAlign: "center",
        fontSize: 14,
        marginVertical: 15,
        

        flexDirection:"row",
        alignItems:"center"
        

    },
    
})

export default Feedback;