import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartScreen = ({ route, navigation }) => {
  const { bmr } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>환영합니다!</Text>
      <Text style={styles.text}>당신의 BMR은 {bmr} kcal 입니다.</Text>
      <Button title="시작하기" onPress={() => navigation.navigate('HomeScreen')}/>
    </View>
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
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 30,
  },
});

export default StartScreen;
