import React, { Component } from "react";
import {StyleSheet,Text,TextInput,TouchableOpacity,ScrollView,View,} from "react-native";
import {connect} from 'react-redux'
import {logEmailAccount} from '../redux/actions/authActions'

class LogInScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:"",
    }
  }
  handleUpdateState =(name,value)=>{
    this.setState({
      [name]:value
    })

  }
  handleOnSubmit=()=>{
this.props.logEmailAccount(this.state.email,this.state.password)
  }
  render() {
    const {navigation,auth} = this.props
    return (

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log In</Text>
        </View>
 
        <View>
        {
          auth.error.login && 
          <Text style={{color:'red'}}>{auth.error.login}</Text>
          }
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text)=>{
              this.handleUpdateState('email',text)
            }}
            value={this.state.email}
            
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text)=>{
              this.handleUpdateState('password',text)
            }}
           
            
          />
          <Text style={styles.forgotPassword} >Forgot password?</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} 
          onPress={(this.handleOnSubmit)}
          >
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


const styles = StyleSheet.create({
  container: {
    margin: 55,
    marginTop: 100,
    marginHorizontal: 30,
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
    borderBottomWidth:2,
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
const mapStateToProps =(state)=> {
  return {auth:state}
}

export default  connect(mapStateToProps,{logEmailAccount})(LogInScreen);
