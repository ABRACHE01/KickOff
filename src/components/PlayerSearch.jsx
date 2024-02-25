import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { setPlayerQuery } from '../redux/features/Player/playerSlice'; 
import { useDispatch } from 'react-redux';


const PlayerSearch = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

    searchQuery ? dispatch(setPlayerQuery(searchQuery)) : "" ;




  
  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      </TouchableOpacity>
    <TextInput
        style={styles.input}
        placeholder="Search player..."
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
});

export default PlayerSearch;
