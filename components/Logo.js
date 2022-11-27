import React from 'react';
import { View, Text, Button, StyleSheet, Image , ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

function Logo({navigation}) {
    const {removeToken} = React.useContext(AuthContext);

    return (  
        <View style={styles.logo}>
            <Text style={styles.logoText}>ExLearn</Text>
            {/* <Image source={{uri:"https://res.cloudinary.com/edifice-solutions/image/upload/v1667167262/Group_2_vzgmhw.png"}} style={styles.logoimage} resizeMethod="resize" resizeMode="contain" /> */}
            <Ionicons style={{
                paddingHorizontal:20,
            }} onPress={function () {
                removeToken();
                
                    
                }} name="log-in-sharp" size={32} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        padding:5,
        flexDirection:"row",
        justifyContent:'space-between'
    },
    logoText :{
        fontSize:25,
        color:"white",
        fontWeight:"bold",
        
        
    },
    logoimage:{
        width:40,
        height:40
    }
})
export default Logo;