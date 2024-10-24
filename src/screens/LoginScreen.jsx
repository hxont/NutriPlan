import React, { Component } from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';

import kakaologo from '../../assets/kakaologo.png';
import kakao from '../../assets/loginkakao.png';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;

        return (
            <>
                <View style={styles.container}>
                    {/* kakaologo 이미지 */}
                    <Image source={kakaologo} style={styles.kakaoLogo} />

                    {/* Kakao 로그인 버튼 */}
                    <TouchableOpacity onPress={() => navigation.navigate('LoginDetailScreen')}>
                        <Image source={kakao} style={styles.kakaoImage} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF6FF',
        justifyContent: 'flex-start',
        alignItems: 'center', // 중간 정렬
    },
    kakaoLogo: {
        width: 300, // 가로 331px
        height: 280, // 세로 285px
        marginTop: 160, // 상단에서의 거리
    },
    kakaoImage: {
        width: 220,  // 가로 440px (원래 크기의 2/3)
        height: 120,  // 세로 120px (원래 크기의 2/3)
    },
});


export default LoginScreen;
