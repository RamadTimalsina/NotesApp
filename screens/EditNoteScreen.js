import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
} from 'react-native';
import {NotesContext} from '../NotesContext';

//TODO: function to edit the note
const EditNotesScreen = ({route, navigation}) => {
  const {index, note} = route.params;
  const {editNote} = useContext(NotesContext);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  //funciton to save after the change
  const handleSave = () => {
    editNote(index, title, text);
    //make the screen go back to the home screen after change
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <TextInput
        onChangeText={title => setTitle(title)}
        placeholder="Enter your Title "
        style={styles.TitleBox}
        value={title}
      />
      <TextInput
        editable
        multiline
        onChangeText={setText}
        value={text}
        style={styles.TextBtn}
        placeholder="Enter Text Here"
      />
      <View style={styles.bottom}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.InfoContainer}>
          <Text style={styles.InfoText}>Cancel</Text>
        </Pressable>
        <Pressable onPress={handleSave} style={styles.InfoContainer}>
          <Text style={styles.InfoText}>Save </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default EditNotesScreen;

const styles = StyleSheet.create({
  TitleBox: {
    fontWeight: '800',
    fontSize: 20,
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 60,
  },
  TextBtn: {
    fontSize: 19,
    width: 300,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    margin: 30,
    paddingHorizontal: 13,
    borderRadius: 10,
    height: 240,
    textAlignVertical: 'top',
  },
  InfoContainer: {
    marginTop: 80,
    width: '40%',
    height: 50,
    backgroundColor: '#C70039',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    elevation: 5,
  },
  InfoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
