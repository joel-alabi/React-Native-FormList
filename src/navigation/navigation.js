
import React from 'react';
import ContactScreen from '../Screens/ContactScreen';
import LogInScreen from '../Screens/LogInScreen';
import RegisterScreen from '../Screens/RegisterScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function AppContainer() {
  return (
    
       <NavigationContainer >
      <Stack.Navigator>

      <Stack.Screen 
      options={{header: () => null }}
      name="LogInScreen"
       component={LogInScreen} />

      <Stack.Screen
      options={{header: () => null }}
       name="RegisterScreen" 
       component={RegisterScreen} />

      <Stack.Screen 
      options={{
        title: " CONTACTS",
        headerStyle:{
          backgroundColor:"#b617eb"
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
      name="ContactScreen" 
      component={ContactScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}


