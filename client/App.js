import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screen/Home';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkslateblue'
  }
});

export default App;
