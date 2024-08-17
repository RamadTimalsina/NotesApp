import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
      <View style={{backgroundColor: '#F0F0F0'}}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name="horizontal-distribute"
              size={26}
              color="black"
            />
          </View>
          <Text style={styles.profileName}>Your name </Text>
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={styles.profileImage}
          />
          <Text style={styles.profileEmail}>your.email@example.com</Text>
        </View>
      </View>
      <View style={styles.EditProfileContainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Edit profile
        </Text>
      </View>
      <View style={styles.EditProfileContainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Logout
        </Text>
      </View>
      {/* Add other drawer items here */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DFEDF8',
    padding: 7,
    borderRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  iconContainer: {
    borderColor: '#E7E5E7',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    marginRight: 10,
  },
  profileName: {
    flex: 1,
    color: '#000000',
    fontFamily: 'RalewayBold',
    fontSize: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#333',
  },
  EditProfileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    width: '80%',
    height: 50,
    backgroundColor: '#C70039',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    elevation: 5,
  },
});
