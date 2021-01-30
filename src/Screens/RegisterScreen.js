import React, { Component } from 'react'
import { View,Text,StyleSheet,TextInput,TouchableOpacity, ScrollView } from 'react-native';


class RegisterScreen extends Component {
   
    render() {
        const {navigation} = this.props
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaaaaa"
            
            
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            
           
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#aaaaaa"
           
            
          />
         <Text style={styles.forgotPassword} onPress={() => {navigation.navigate("LogInScreen") }}>Forgot password?</Text> 
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("ContactScreen") }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.existingAccountContainer}>
          <Text style={styles.existingAccountText}>
            You already have an account?
          </Text>
          <Text style={styles.logInText} onPress={() => {navigation.navigate("LogInScreen") }}>Log in</Text>
        </View>
      </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        margin: 50,
        marginTop: 90,
      },
    
      signUpText: {
        fontSize: 50,
        color: "#b734eb",
        marginBottom: 30,
      },
    
      loginTextContainer: {
        marginBottom: 25,
      },
    
      input: {
        marginVertical:10,
        paddingBottom:15,
        borderStyle:'solid',
        borderBottomColor:'#b734eb',
        borderBottomWidth:1,
        fontSize:20,
        
      },
    
      forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 3,
        color: "#02a6cf",
      },
    
      button: {
        height: 50,
        backgroundColor: "#b734eb",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginVertical: 55,
      },
    
      buttonText: {
        color: "white",
        fontSize: 27,
      },
    
      existingAccountContainer: {
        flexDirection: "row",
        justifyContent: "center",
      },
    
      existingAccountText: {
        marginRight: 10,
        fontSize: 16,
      },
    
      logInText: {
        fontSize: 16,
        color: "#b734eb",
      },
  });
  export default RegisterScreen; 

