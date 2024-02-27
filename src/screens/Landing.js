import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from '../components/Button';

const Landing = ({ onNavigate }) => {

  return (
    <ImageBackground
      source={require('../../assets/landing.jpg')}
      style={styles.backgroundImage}
    >
       <View style={styles.container}>
      <Button title="Browse Matches" onPress={onNavigate} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Landing;
