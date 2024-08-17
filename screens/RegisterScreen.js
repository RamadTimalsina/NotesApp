import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import emailValidator from 'email-validator';

import {useNavigation} from '@react-navigation/native';
import LoginInScreen from './LoginInScreen';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const navigation = useNavigation();

  const singInUser = () => {
    navigation.navigate('Main');
  };

  const LoginInUser = () => {
    navigation.navigate('login');
  };

  const handleValidateEmail = text => {
    const lowerCaseEmail = email.toLowerCase(); // Convert to lowercase for validation
    if (!emailValidator.validate(lowerCaseEmail)) {
      Alert.alert('Invalid Email', 'Please use proper email address');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NoteNest</Text>
        </View>

        <View style={styles.LoginInBox}>
          <View style={styles.NameBox}>
            <FontAwesome
              name="user-circle"
              size={26}
              // color="black"
            />
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Enter your Name"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              style={styles.inputbox}
            />
          </View>

          <View style={styles.EmailBox}>
            <Fontisto name="email" size={26} />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              onEndEditing={handleValidateEmail}
              placeholder="Enter your Email"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              style={styles.inputbox}
            />
          </View>

          <View style={styles.PasswordBox}>
            <Ionicons name="lock-closed-outline" size={26} />
            <TextInput
              value={password}
              secureTextEntry={isPasswordShown}
              onChangeText={text => setPassword(text)}
              placeholder="set your Password"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              style={styles.inputbox}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{position: 'absolute', right: 12}}>
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={26} />
              ) : (
                <Ionicons name="eye" size={26} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
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
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={styles.loginBtn}> Already have an Account?</Text>
          <Pressable onPress={LoginInUser}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 6}}>
              Login
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
  NameBox: {
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 50,
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
  loginBtn: {
    textAlign: 'center',
    color: '#0000CD',
    fontSize: 16,
  },
  inputbox: {marginVertical: 5, width: 300},
});
