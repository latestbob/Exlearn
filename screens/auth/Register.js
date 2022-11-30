import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator,SafeAreaView } from 'react-native';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Ionicons from '@expo/vector-icons/Ionicons';
import {useState} from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

function Register({ navigation }) {
    
    const {AddToStorage, getToken, baseUrl} = React.useContext(AuthContext);
    const [isLoading , setLoading] = useState(false);

    const [hide, setHide] = useState(true);
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    return (

        <>
         
        
        {
            isLoading ? <View style={{
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
    initialValues={{ email: '', password: '', username: '' }}
    onSubmit={function(values){
        setLoading(true);
        
        axios.post(`${baseUrl}api/register`, {

            "firstname":values.username,
            "email":values.email,
            "password":values.password,
            "password_confirmation":values.password

        }).then(response => {
           console.log(response)
            console.log(response.data)
            //console.log(response.data.token)

            setLoading(false);
            AddToStorage(response.data.token, response.data.user.email, response.data.user.name );
            // navigation.navigate("AuthStack");


          
        }).catch(error => {
            //console.log(error)

            if (error.response) {
                        
                console.log(error.response.data.status);
                if(error.response.data.status == "failed"){
                    setLoading(false);
                    alert(error.response.data.message.email);
                    //console.log(error.response.data)
                   
                  
                }
            }
        })
    }}
    validate={function (values) {



        const errors = {};
        if (!values.username) {
            errors.username = 'Username is Required';
        }
        else if (!values.email) {
            errors.email = 'Email is Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        else if (!values.password) {
            errors.password = 'Password is required';
        }
        else if (values.password.length < 8) {
            errors.password = 'Password should be at least 8 characters';
        }

        
        // else if (values.password != values.password_confimation) {
        //     errors.password_confimation = 'Password not matched'
        // }

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
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="Enter Username"
                placeholderTextColor="grey"
                autoCapitalize="none"
            />
             <Ionicons style={{
            marginRight:14,
        }}  name="person" size={25} color="grey" />
            </View>
            {errors.username && touched.username ? <Text style={{
                color: "red",
                fontWeight: "500"
            }}>{errors.username}</Text> : null}
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
                color: "red",
                fontWeight: "500"
            }}>{errors.email}</Text> : null}


<View style={styles.input}>
        <TextInput style={{
            flex:1,
            textAlign:"center",
            fontSize:17
        }}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Enter Valid Password"
            placeholderTextColor="grey"
            autoCapitalize="none"
            secureTextEntry={hide}
        />

        {
            hide ? <Ionicons style={{
                marginRight:14,
            }} onPress={function () {
                setHide(!hide);
            }} name="eye-off" size={25} color="grey" /> :
            <Ionicons style={{
                marginRight:14,
            }} onPress={function () {
                setHide(!hide);
            }} name="eye" size={25} color="grey" />
        }
         

    </View>
   
            {errors.password && touched.password ? <Text style={{
                color: "red",
                fontWeight: "500"
            }}>{errors.password}</Text> : null}

           


            {/* <Button onPress={handleSubmit} title="Submit" /> */}

            <TouchableOpacity onPress={handleSubmit}>
                <View style={{
                    backgroundColor: "orange",
                    height: 54,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 15

                }}>
                    <Text style={{
                        fontWeight: "800",
                        fontSize: 18,
                        textAlign: "center",
                        color: "black",
                        letterSpacing: 2,

                    }}>Register</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={function () {
                navigation.navigate('Login');
            }}>
                <View style={{
                    paddingVertical: 15,
                    textAlign: "center"
                }}>
                    <Text style={{
                        fontWeight: "500",
                        color: "white",
                        textAlign: "center"
                    }}>Already a member ? Login Now</Text>
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
        paddingTop: 60,
        flexDirection: "column",

        alignItems: "center",
        backgroundColor: "#0B1F48",
        flex:1
       
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
export default Register;