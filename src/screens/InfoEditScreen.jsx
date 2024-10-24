import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

const InfoEdit = ({ navigation }) => {
    const [gender, setGender] = useState('female');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleConfirm = () => {
        const bmr = gender === 'male'
            ? 66.47 + (13.75 * parseFloat(weight)) + (5 * parseFloat(height)) - (6.76 * parseInt(age))
            : 655.1 + (9.56 * parseFloat(weight)) + (1.85 * parseFloat(height)) - (4.68 * parseInt(age));
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* 상단 제목 */}
            <View style={styles.title}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                style={{marginRight: '28%'}}>
                    <IconI name="arrow-back" size={25} color="black"/>
                </TouchableOpacity>
                <Text style={{marginRight: '35%', fontSize: 18}}>회원 정보 수정</Text>
            </View>

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
                <Text style={styles.confirmButtonText}>수정하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // 상단에 요소 배치
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: '6%',
        marginBottom: '30%',
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
        marginBottom: 20, // 성별 선택 아래 여백
    },
    genderButton: {
        width: 91,
        height: 32,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
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
        width: '40%', // 전체 폭 사용
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
        color: '#645D5D',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: '#E7E7E7',
        height: 32,
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
        textAlign: 'center',
    },
});

export default InfoEdit;
