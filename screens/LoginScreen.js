import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase'
export default class LoginScreen extends Component {
    constructor (){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }

    userSignUp=(emailId,password)=> {
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('User added sucessfully')
        })
        .catch(function(error){
            var errorCode=error.code;
            var erorMessage=error.message;
            return Alert.alert(errorMessage)
    })
    }

    userLogin=(emailId,password)=> {
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert(' sucessfully login')
        })
        .catch(function(error){
            var errorCode=error.code;
            var erorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    render (){
        return(
            <View style={styles.container}>
               <View style={styles.profileContainer}>
        <Image style={{ width: 180, height: 100 }} source={require("../assets/AppLogo.png")} />
          <Text style={styles.title}>Barter App</Text>
        </View>

                <View>
                    <TextInput 
                    style={styles.loginBox}
                    placeHolder='abc@example.com'
                    placeholderTextColor = 'orange'
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />
                         <TextInput 
                    style={styles.loginBox}
                    secureTextEntry={true}
                    placeHolder='enter Password'
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.userLogin(this.state.emailIdId ,this.state.password)}}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.userSignUp(this.state.emailIdId ,this.state.password)}}>
                        <Text style={styles.buttonText}>signUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#feeob2'
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#e1a1a7'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : 'e1a107',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button : {
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        borderColor : 'orange',
        backgroundColor:"white",
        shadowColor: "#000",
    },
    buttonText : {
        color:'red',
        fontWeight:'200',
        fontSize:20
    }




})