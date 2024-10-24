import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';

import frog from '../../assets/frog.png';

class StartScreen extends Component {
  constructor(props) {
    super(props);
  }
    render() {
    const { navigation } = this.props;
        return (
            <>
              <SafeAreaView style={styles.container}>
                <TouchableOpacity>
                  <Text style={{fontSize: 12, textDecorationLine: 'underline', marginTop: '10%'}}>BMR이 뭔가요?</Text>
                </TouchableOpacity>
                <View style={styles.content}>
                  <Text style={{fontSize: 35, fontWeight: 'bold', marginVertical: '2%'}}>환영합니다!</Text>
                  <Text style={{fontSize: 35, fontWeight: 'bold', marginVertical: '2%'}}>당신의 BMR은</Text>
                  <Image source={frog} style={styles.frog} resizeMode="contain"/>
                  <Text style={{fontSize: 35, fontWeight: 'bold', color: 'orange', marginVertical: '2%'}}>1500kcal</Text>
                  <Text style={{fontSize: 35, fontWeight: 'bold', marginVertical: '1%'}}>입니다!</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.confirmButtonText}>시작하기</Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '4%',
  },
  content: {
    height: '80%',
    width: '100%',
    backgroundColor: '#EEF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 10,
  },
  frog: {
    height: '35%',
    width: '50%',
  },
  confirmButton: {
    width: 112,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#52AA60',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default StartScreen;
