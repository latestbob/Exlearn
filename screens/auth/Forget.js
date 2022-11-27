import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


function Forget({navigation}) {
    

    const {AddToStorage, getToken, baseUrl} = React.useContext(AuthContext);
    const [isLoading , setLoading] = useState(false);

    const [hide, setHide] = useState(true);

    return (

        <>
        {isLoading ? <View style={{
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <ActivityIndicator  size="large"/>
        </View> :
        
        <View style={styles.container}>

        <View style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            marginBottom: 30,
        }}>


            <Image style={styles.logo} source={{ uri: "https://edificesolutions.com.ng/assets/img/edifice%20solutions.PNG" }} resizeMethod="resize" resizeMode='contain' />

        </View>

        <Formik
            initialValues={{ email: '' }}
            onSubmit={function(values){
                setLoading(true);
                
                 axios.post(`${baseUrl}api/forgot-password`, {

                    "email":values.email,
                //     "password":values.password

                }).then(response => {
                   //console.log(response)
                    console.log(response.data.status)
                    //console.log(response.data.token)

                    if(response.data.status == "success"){ 
                        setLoading(false);
                        navigation.navigate("ResetPassword",{
                            "email":response.data.email
                        });
                    }
        
                    
                    //  console.log(response.data.user.name);
                    //AddToStorage(response.data.token, response.data.user.email, response.data.user.name );
                    // navigation.navigate("AuthStack");
                   


                  
                }).catch(error => {
                    //console.log(error)
                    if (error.response) {
                        
                        console.log(error.response.data.status);
                        if(error.response.data.status == false){
                            setLoading(false);
                            alert(error.response.data.msg);
                        }
                    }
                })

               // navigation.navigate("ResetPassword");
            }}
            validate={function (values) {



                const errors = {};

                if (!values.email) {
                    errors.email = 'Email is Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                

                //...

                return errors;
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={{
                    width: "100%",
                    paddingHorizontal: 10,
                }}>
                    <View style={styles.input}>
                    <TextInput style={{
                        flex:1,
                        textAlign:"center",
                        fontSize:17
                    }}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Enter Email Address"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        keyboardType='email-address'
                    />
                    <Ionicons style={{
                        marginRight:14,
                    }} onPress={function () {
                        
                    }} name="mail" size={25} color="grey" />
                    </View>
                    {errors.email && touched.email ? <Text style={{
                        color:"red",
                        fontWeight:"500"
                    }}>{errors.email}</Text> : null}

               

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

                            }}>Validate Email</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={function(){
                        navigation.navigate('Login');
                    }}>
                        <View style={{
                            paddingVertical: 20,
                            textAlign: "center"
                        }}>
                            <Text style={{
                                fontWeight: "500",
                                color: "white",
                                textAlign: "center"
                            }}> Back To Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    </View>
    }
        
        </>

       

    );
}

const styles = StyleSheet.create({
    container: {
        
        flexDirection: "column",

        alignItems: "center",
        backgroundColor: "#0B1F48",
        flex: 1,
        justifyContent:"center",
    },
    logo: {
        width: 190,
        height: 190,
    },
    input: {

        height: 60,

        borderRadius: 50,
        backgroundColor: "white",
        textAlign: "center",
        fontSize: 17,
        marginVertical: 15,
        

        flexDirection:"row",
        alignItems:"center"
        

    },
})
export default Forget;