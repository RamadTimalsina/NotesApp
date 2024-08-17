// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useRef} from 'react';
// import {useContext} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {FlatList} from 'react-native';
// import {Pressable} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';
// import {NotesContext} from '../NotesContext';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const {notes, deleteNote} = useContext(NotesContext);
//   const flatListRef = useRef(null);
//   const handleAdd = () => {
//     navigation.navigate('AddNote');
//   };

//   useEffect(() => {
//     if (flatListRef.current && notes.length > 0) {
//       flatListRef.current.scrollToEnd({animated: true});
//     }
//   }, [notes]);

//   const renderItem = ({item, index}) => {
//     <View style={styles.noteContainer}>
//       <Text style={styles.noteTitle}>{item.title}</Text>
//       <Text style={styles.noteText}>{item.Text}</Text>
//       <Pressable
//         onPress={() => deleteNote(index)}
//         style={styles.DeleteBtn}></Pressable>
//     </View>;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         data={notes}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//         showsVerticalScrollIndicato={false}></FlatList>
//       <Pressable onPress={handleAdd} style={styles.AddBtn}>
//         <AntDesign name="pluscircle" color="#C70039" size={70} />
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blue',
//   },
//   noteContainer: {
//     // position: 'absolute',
//     // height: 50,
//     // width: 50,
//     // backgroundColor: 'blue',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   noteTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   noteText: {fontSize: 16, marginVertical: 5},
//   AddBtn: {
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//     margin: 20,
//   },
//   DeleteBtn: {
//     margin: 30,
//     width: '70%',
//     height: 50,
//     backgroundColor: '#C70039',
//     borderRadius: 50,
//     paddingVertical: 10,
//     paddingHorizontal: 40,
//     elevation: 5,
//   },
// });
import React, {useContext, useRef, useEffect} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NotesContext} from '../NotesContext';

const HomeScreen = ({navigation}) => {
  //use of NoteContex.js as a shared component
  const {notes, deleteNote} = useContext(NotesContext);
  //take editNote from the NoteContex.js
  const {editNote} = useContext(NotesContext);
  //use of useRef to the scroolbar move to the latest data added place
  const flatListRef = useRef(null);
  //function to handle the add the new notes to the home screen
  const handleAdd = () => {
    navigation.navigate('AddNote');
  };
  //useEffect here  is used to make the screen stay or move to the place where the current data is added
  useEffect(() => {
    if (flatListRef.current && notes.length > 0) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [notes]);
  //this useeffect here is used so that even when the user move back and comeagain the notes start from the previous location it was
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (flatListRef.current && notes.length > 0) {
        flatListRef.current.scrollToEnd({animated: false});
      }
    });

    return unsubscribe;
  }, [navigation, notes]);
  //it it used to render the data that is title and text as a notes in the home screen
  const renderItem = ({item, index}) => (
    <View style={styles.noteContainer}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteText}>{item.text}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Pressable onPress={() => deleteNote(index)} style={styles.DeleteBtn}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            Delete Me
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('EditNote', {index, note: item})}
          style={styles.DeleteBtn}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            Edit Me
          </Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <Pressable onPress={handleAdd} style={styles.AddBtn}>
        <AntDesign name="pluscircle" color="#C70039" size={70} />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  noteTitle: {
    fontFamily: 'RalewaySemiBOld',
    fontSize: 25,
    fontWeight: '200',
    color: '#000000',
  },
  noteText: {
    fontSize: 20,
    marginVertical: 5,
    color: '#3a2d97',
    textAlign: 'left',
  },
  AddBtn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: 10,
  },
  DeleteBtn: {
    marginTop: 30,
    marginBottom: 30,
    width: '40%',
    height: 50,
    backgroundColor: '#C70039',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    elevation: 5,
  },
  // EditBtn: {
  //   // justifyContent: 'center',
  //   // margin: 30,
  //   width: '70%',
  //   height: 50,
  //   backgroundColor: '#C70039',
  //   borderRadius: 50,
  //   paddingVertical: 10,
  //   paddingHorizontal: 40,
  //   elevation: 5,
  // },
});
