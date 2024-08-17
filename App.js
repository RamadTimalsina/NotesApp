import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginInScreen from './screens/LoginInScreen';
import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/startScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import CustomDrawerContent from './Drawer/CustomDrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddNoteScreen from './screens/AddNoteScreen';
import {NotesProvider} from './NotesContext';
import EditNotesScreen from './screens/EditNoteScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="EditProfile" component={EditProfileScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    //notesProvider is used  since it is the shared component in the screen that it contain
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={LoginInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={DrawerNavigator} // Show drawer in this part of the stack
            options={{headerShown: false}} // Hide header for drawer screens
          />

          <Stack.Screen
            name="AddNote"
            component={AddNoteScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditNote"
            component={EditNotesScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
}

export default App;
