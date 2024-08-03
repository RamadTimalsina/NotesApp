import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Logo</Text>
      </View>
      <Image
        source={require('../assets/Images/photo1.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>NoteNest</Text>
      <Text style={styles.quote}>
        "The faintest ink is more powerful than the strongest memory. Write down
        your thoughts, dreams, and ideas, for they are the seeds of your
        future."
      </Text>
      <Pressable onPress={handleLogin} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Get started</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'RalewayExtraBold',
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 150,
    marginBottom: 20,
    //for ios
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 20,
    color: '#000000',
  },
  quote: {
    fontFamily: 'RalewayItalic',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 12,
    color: '#000000',
    marginBottom: 30,
  },
  buttonContainer: {
    backgroundColor: '#C70039',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    //for ios
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
