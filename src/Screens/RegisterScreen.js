import React, { Component } from 'react'
import { View,Text,StyleSheet,TextInput,TouchableOpacity, ScrollView } from 'react-native';
import {connect} from 'react-redux'
import {createEmailAccount ,registerError} from '../redux/actions/authActions'
class RegisterScreen extends Component {
   constructor(props){
     super(props)
     this.state={
       email:"",
       password:"",
       confirm:"" 
     }
   }
   handleUpdateState =(name,value)=>{
     this.setState({
       [name]:value
     })

   }
   handleOnSubmit=()=>{
if (this.state.password!==this.state.confirm){
this.props.registerError('password do not match')
return;
}
this.props.createEmailAccount(this.state.email,this.state.password)
   }
    render() {
        const {navigation,auth} = this.props
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>

        <View>
          {
          auth.error.register && 
          <Text style={{color:'red'}}>{auth.error.register}</Text>
          }
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text)=>{
              this.handleUpdateState('email',text)
            }}
            value={this.state.email}
            placeholderTextColor="#aaaaaa"
            
            
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            value={this.state.password}
            onChangeText={(text)=>{
              this.handleUpdateState('password',text)
            }}
            secureTextEntry={true}
           
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#aaaaaa"
             secureTextEntry={true}
             onChangeText={(text)=>{
              this.handleUpdateState('confirm',text)
            }}
            value={this.state.confirm}
           
            
          />
         <Text style={styles.forgotPassword} onPress={() => {navigation.navigate("LogInScreen") }}>Forgot password?</Text> 
        </View>

        <View>
          <TouchableOpacity style={styles.button} 
          
          onPress={this.handleOnSubmit}
          >
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
        marginHorizontal: 30,
      },
    
      signUpText: {
        fontSize: 50,
        color: "#b734eb",
        marginBottom: 30,
      },
    
      loginTextContainer: {
        marginBottom: 20,
      },
    
      input: {
        marginVertical:15,
        paddingBottom:15,
        borderStyle:'solid',
        borderBottomColor:'#b734eb',
        borderBottomWidth:2,
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

 const mapStateToProps =(state)=> {
    return {auth:state}
  }
  
  
  
  export default connect(mapStateToProps,{createEmailAccount,registerError})(RegisterScreen)

  
 

