import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

const LoginInScreen = () => {
  const navigation = useNavigation();
  const singInUser = () => {
    navigation.navigate('Main');
  };
  const CreteAccount = () => {
    navigation.navigate('Register');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NoteNest</Text>
      </View>

      <KeyboardAvoidingView style={{padding: 1}}>
        <View style={styles.LoginInBox}>
          <View style={styles.EmailBox}>
            <Fontisto name="email" size={26} color="black" />
            <TextInput
              underlineColorAndroid="transparent"
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Enter your Email"
              placeholderTextColor={'black'}
              style={styles.inputbox}
            />
          </View>

          <View style={styles.PasswordBox}>
            <Ionicons name="lock-closed-outline" size={26} color="black" />
            <TextInput
              underlineColorAndroid="transparent"
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Enter your Password"
              placeholderTextColor={'black'}
              style={styles.inputbox}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      <Pressable onPress={singInUser} style={styles.SignInBox}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Sign In
        </Text>
      </Pressable>
      <View
        style={{
          margin: 10,
        }}>
        <Text style={{backgroundColor: 'white', color: '#000000'}}>
          Forgot Password?
        </Text>
      </View>
      <Pressable onPress={CreteAccount} style={styles.NewAccountBox}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Create Account
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    height: 200,
    width: '100%',
    backgroundColor: '#FF5733',
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    // marginBottom: 20,
    color: '#FFFFFF',
  },
  LoginInBox: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    width: '100%',
  },
  EmailBox: {
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    margin: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
  },
  PasswordBox: {
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
  },
  SignInBox: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 80,
    width: '70%',
    height: 50,
    backgroundColor: '#C70039',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    elevation: 5,
  },
  NewAccountBox: {
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 30,
    width: '70%',
    height: 50,
    backgroundColor: '#C70039',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    elevation: 5,
  },
  inputbox: {color: 'black', marginVertical: 5, width: 300},
});
