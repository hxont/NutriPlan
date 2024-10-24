import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginDetail = ({ navigation }) => {
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleConfirm = () => {
    const bmr = gender === 'male'
        ? 66.47 + (13.75 * parseFloat(weight)) + (5 * parseFloat(height)) - (6.76 * parseInt(age))
        : 655.1 + (9.56 * parseFloat(weight)) + (1.85 * parseFloat(height)) - (4.68 * parseInt(age));

    navigation.navigate('StartScreen', { bmr: bmr.toFixed(2) });
  };

  return (
      <View style={styles.container}>
        {/* 프로필 사진 */}
        <View style={styles.profileCircle}>
          <Image source={require('../../assets/flower.png')} style={styles.profileImage} />
        </View>

        {/* 성별 선택 */}
        <View style={styles.genderContainer}>
          <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'female' ? styles.genderSelected : styles.genderUnselected,
              ]}
              onPress={() => setGender('female')}
          >
            <Text style={styles.genderText}>여성</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'male' ? styles.genderSelected : styles.genderUnselected,
              ]}
              onPress={() => setGender('male')}
          >
            <Text style={styles.genderText}>남성</Text>
          </TouchableOpacity>
        </View>

        {/* 나이, 키, 몸무게 입력 */}
        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>나이</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                  style={styles.input}
                  value={age}
                  onChangeText={setAge}
                  keyboardType="numeric"
              />
              <Text style={styles.inputSuffix}>세</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>키</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                  style={styles.input}
                  value={height}
                  onChangeText={setHeight}
                  keyboardType="numeric"
              />
              <Text style={styles.inputSuffix}>cm</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>몸무게</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                  style={styles.input}
                  value={weight}
                  onChangeText={setWeight}
                  keyboardType="numeric"
              />
              <Text style={styles.inputSuffix}>kg</Text>
            </View>
          </View>
        </View>

        {/* 확인 버튼 */}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  // 사진 스타일
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    top: 170,
  },
  profileImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  // 성별 선택 버튼 스타일
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    position: 'absolute',
    top: 316,
  },
  genderButton: {
    width: 91,
    height: 32,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1, // 연한 그림자 효과
    shadowRadius: 3,
    elevation: 2, // Android용 그림자 효과
  },
  genderUnselected: {
    backgroundColor: '#E7E7E7',
  },
  genderSelected: {
    backgroundColor: '#BCE4C2',
  },
  genderText: {
    fontSize: 14,
    textAlign: 'center',
  },
  // 입력 필드 스타일
  inputGroup: {
    position: 'absolute',
    top: 380, // 성별 버튼 바로 밑에 위치하도록 조정
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: '#645D5D', // 글자 색상 변경
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#E7E7E7',
    height: 32,  // 세로 32로 수정
    width: 146,  // 가로 146으로 수정
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
  },
  inputSuffix: {
    marginRight: 5,
  },
  // 확인 버튼 스타일
  confirmButton: {
    top: 200,
    width: 112,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#52AA60',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center', // 텍스트 중앙 정렬
  },
});

export default LoginDetail;
