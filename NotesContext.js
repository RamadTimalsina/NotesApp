import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NotesContext = createContext();

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem('notes');
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error('Failed to load notes', error);
      }
    };

    loadNotes();
  }, []);

  //the function "saveNotes" takes a list of notes called "newNotes" as input
  const saveNotes = async newNotes => {
    //using try and catch to find any potential error in the code
    try {
      //await is used to wait until the data loade
      //Since we can only save strings(text) in AsyncStorage.This list of notes should be turned into a string .This is done using 'JSON.stringfy(newNotes)'

      //now this function tries to save the string in a special storage area on your device and notes is labeled to identify this peice of data
      await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    } catch (error) {
      console.error('failed to save notes', error);
    }
  };

  //TODO:here we have addnote function this function takes title and text and creating a list it is added to the collestion of notes usig [...notes ]
  const addNote = (title, text) => {
    const newNotes = [...notes, {title, text}];
    //this setnotes update the state of the notes with the new list
    setNotes(newNotes);
    //finally the function call saveNotes(newNotes ) to save the updated list of notes to storage
    saveNotes(newNotes);
  };

  //TODO:Delete notes
  //the index tells the funciton which note to remove from the list
  const deleteNote = index => {
    // the function inside the filter takes tow argument that is current element using (_) symbol and its index i
    //the filter in the function checks if the current index i is not equal to the index of the note we want to delete
    //if i is equal to 'index' the note is excluded from the new array
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    saveNotes(newNotes);
  };

  const editNote = (index, newTitle, newText) => {
    // Step 1: Create a new list with the edited note
    const newNotes = notes.map((note, i) => {
      if (i === index) {
        // If this is the note to edit, return the new note
        return {title: newTitle, text: newText};
      }
      // Otherwise, return the note as is
      return note;
    });

    // Step 2: Update the state with the new list of notes
    setNotes(newNotes);

    // Step 3: Save the updated list to storage
    saveNotes(newNotes);
  };

  return (
    <NotesContext.Provider value={{notes, addNote, deleteNote, editNote}}>
      {children}
    </NotesContext.Provider>
  );
};
