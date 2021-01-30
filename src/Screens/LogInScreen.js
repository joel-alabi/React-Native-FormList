import React, { Component } from "react";
import {StyleSheet,Text,TextInput,TouchableOpacity,ScrollView,View,} from "react-native";


class LogInScreen extends Component {
  
  render() {
    const {navigation} = this.props
    return (

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log In</Text>
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
          <Text style={styles.forgotPassword} >Forgot password?</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Text style={styles.signUpText} onPress={() => {navigation.navigate("RegisterScreen") }}>Sign up</Text>
        </View>
      </ScrollView>
    )
  }
}
export default  LogInScreen;


const styles = StyleSheet.create({
  container: {
    margin: 55,
    marginTop: 100,
  },
 
  loginText: {
    fontSize: 50,
    color: "#b617eb",
  },

  loginTextContainer: {
    marginBottom: 20
  },

  input: {
    marginVertical:10,
    paddingBottom:15,
    borderStyle:'solid',
    borderBottomColor:'#b734eb',
    borderBottomWidth:1,
    fontSize:20,
    marginTop:20,
    color:'black'
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 2.5,
    color: "#02a6cf",
  },
  button: {
    height: 50,
    backgroundColor: "#b617eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 27,
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    marginRight: 10, 
    fontSize: 16,
  },
  signUpText: {
    fontSize: 16,
    color: "#b617eb",
  },
});  
