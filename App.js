import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ContactScreen from './src/Screens/ContactScreen';
import LogInScreen from './src/Screens/LogInScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {
  return (
    
      
        <NavigationContainer style={styles.container}>
      <Stack.Navigator>

      <Stack.Screen 
      options={{
        header: () => null
      }}
      name="LogInScreen"
       component={LogInScreen} />

      <Stack.Screen
      options={{
        header: () => null
      }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
