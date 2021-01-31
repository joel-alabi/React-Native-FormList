
import React from 'react';
import ContactScreen from '../Screens/ContactScreen';
import LogInScreen from '../Screens/LogInScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import { View, Image, Text, StyleSheet ,TouchableOpacity} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {connect} from 'react-redux'
import {logout} from '../redux/actions/authActions';
const Stack = createStackNavigator();

 function AppContainer({auth,logout}) {
  return (
    
       <NavigationContainer >
     {
     auth.login ?
//show contact if login is true
<Stack.Navigator>
<Stack.Screen 
    options={{
      headerRight:()=>(
      <TouchableOpacity 
        style={{marginRight:20,}}
      onPress={logout}
      >
        <Text style={{color:'white',fontWeight:'bold'}}>Logout
        </Text>
        </TouchableOpacity>),
      title: " CONTACTS",
      headerStyle:{
        backgroundColor:"#b617eb"
      },
      headerTintColor: "white",
    }}
    name="ContactScreen" 
component={ContactScreen} />

</Stack.Navigator>

     :
//show login and register
<Stack.Navigator>
<Stack.Screen 
    options={{header: () => null }}
    name="LogInScreen"
    component={LogInScreen} />

<Stack.Screen
    options={{header: () => null }}
    name="RegisterScreen" 
    component={RegisterScreen} />
</Stack.Navigator>
     }
    </NavigationContainer>
  
  );
}

const mapStateToProps =(state)=> {
  return {auth:state}
}


export default connect(mapStateToProps,{logout})(AppContainer);
