// import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginInScreen from './screens/LoginInScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import StartScreen from './screens/startScreen'; // Ensure this import is correct

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}} // Hide header and drawer for StartScreen
        />
        <Stack.Screen
          name="login"
          component={LoginInScreen}
          options={{headerShown: false}} // Hide header and drawer for LoginInScreen
        />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator} // Show drawer in this part of the stack
          options={{headerShown: false}} // Hide header for drawer screens
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
