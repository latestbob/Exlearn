import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


function ResetPassword({navigation,route}) {
    
    const { email } = route.params;
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
            initialValues={{ code: '', password: '' }}
            onSubmit={function(values){
                //setLoading(true);
                
                // axios.post(`${baseUrl}api/login`, {

                //     "email":values.email,
                //     "password":values.password

                // }).then(response => {
                //    console.log(response)
                //     console.log(response.data)
                //     //console.log(response.data.token)
        
                //     setLoading(false);
                //     //  console.log(response.data.user.name);
                //     AddToStorage(response.data.token, response.data.user.email, response.data.user.name );
                //     // navigation.navigate("AuthStack");
                   


                  
                // }).catch(error => {
                //     console.log(error)
                // })
            }}
            validate={function (values) {



                const errors = {};
                if (!values.code) {
                    errors.code = '6 digits token code is required';
                }
                else if (!values.code.length < 6) {
                    errors.code = 'Token code should be 6 digits';
                } 

                else if(!values.password){
                    errors.password = 'Password is required';
                }
                else if(values.password.length < 8){
                    errors.password = 'Password should be at least 8 characters';
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
                        onChangeText={handleChange('code')}
                        onBlur={handleBlur('code')}
                        value={values.email}
                        placeholder="Enter 6 digits token"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                       keyboardType='numeric'
                       maxLength={6}

                    />
                    <Ionicons style={{
                        marginRight:14,
                    }} onPress={function () {
                        
                    }} name="code" size={25} color="grey" />
                    </View>
                    {errors.code && touched.code ? <Text style={{
                        color:"red",
                        fontWeight:"500"
                    }}>{errors.code}</Text> : null}

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
                        color:"red",
                        fontWeight:"500"
                    }}>{errors.password}</Text> : null}

                    
                    {/* <Button onPress={handleSubmit} title="Submit" /> */}

                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={{
                            backgroundColor: "orange",
                            height: 54,
                            borderRadius: 30,
                            justifyContent: "center",
                            alignItems: "center",
                            marginVertical:20

                        }}>
                            <Text style={{
                                fontWeight: "800",
                                fontSize: 18,
                                textAlign: "center",
                                color: "black",
                                letterSpacing: 2,

                            }}>Reset Password</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={function(){
                        navigation.navigate('Register');
                    }}>
                        <View style={{
                            paddingVertical: 15,
                            textAlign: "center"
                        }}>
                            <Text style={{
                                fontWeight: "500",
                                color: "white",
                                textAlign: "center"
                            }}>Not a member ? Signup Now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>

        <Text style={{
            fontSize:20,
            color:"white"
        }}>{email}</Text>
    </View>
    }
        
        </>

       

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flexDirection: "column",

        alignItems: "center",
        backgroundColor: "#0B1F48",
        flex: 1
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
export default ResetPassword;