import React from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';

const Welcome = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('Form');
  };
  return (
    <SafeAreaView style={styles.page}>
      <Button title="Find Your DreamHome" onPress={pressHandler} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
