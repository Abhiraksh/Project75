import * as React from "react";
import { Text,View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Alert, TextInput } from "react-native";
import firebase from "firebase";
import db from "../config";
import AppHeader from "../components/AppHeader";

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
          emailId: "",
          password: ""
        }
    }



    userLogin=async (emailId, password)=>{
        if(emailId && password){
            
            try{
               const response = await firebase.auth().signInWithEmailAndPassword(emailId, password)
               if(response){
                   this.props.navigation.navigate("Write")
               }
            }

        catch{(error)=>{
           var errorCode = error.code;
           var errorMessage = error.message;
           return Alert.alert(errorMessage)
        }
       };
       }
     else{
         alert("Please enter email and password!")
     }
    }

    render(){
        return(
            <View>
             <View style={{backgroundColor: "#afe"}}>   <AppHeader/></View>
             <View style={{flex: 1, justifyContent: "center", backgroundColor: "#afe"}}>
             <TextInput placeholder="Enter Email" style={styles.ti} 
             onChangeText={(text)=>{
               this.setState({
                   emailId: text
               })
             }}/>
             <TextInput placeholder="Enter Password" style={styles.ti} 
             onChangeText={(text)=>{
               this.setState({
                   password: text
               })
             }}/>
             <TouchableOpacity style={styles.to}
             onPress={()=>{
               this.userLogin(this.state.emailId, this.state.password);
             }}>
              <Text style={styles.text}>Login</Text>
             </TouchableOpacity>
             </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ti:{
      borderWidth: 2,
      borderRadius: 5,
      marginTop: 40,
      height: 50
        },
        to:{
            backgroundColor: "green",
            alignSelf: "center",
            marginTop: 20,
            height: 50,
            width: 100
          },
          to2:{
            backgroundColor: "blue",
            alignSelf: "center",
            marginTop: 20,
            height: 50,
            width: 100
          },
          text:{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 11
          },
    })