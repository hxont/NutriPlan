import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import {PieChart, BarChart} from 'react-native-gifted-charts';

import IconO from 'react-native-vector-icons/Octicons';
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';

import frog from '../../assets/frog.png';

const {width} = Dimensions.get('window');

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const pieData = [
            {value: 50, color: '#5F8262', text: '50%', textColor: 'white'},
            {value: 30, color: '#83AD70', text: '30%', textColor: 'white'},
            {value: 20, color: '#BFD1B1', text: '20%', textColor: 'white'},
        ];
        const pieSize = width * 0.5;
        const barData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

        const { navigation } = this.props;
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <View style={styles.titleWrapper}>
                        <Text style={{fontSize:18}}>나의 프로필</Text>
                    </View>

                    <ScrollView contentContainerStyle={[styles.scrollContent, { alignItems: 'center' }]}>
                    <View style={styles.period}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>WEEK</Text>
                    </View>

                    <View style={styles.kcalValue}>
                        <Text style={{color: '#008037', fontSize: 30, fontWeight: 'bold'}}>1200 kcal</Text>
                        <Text style={{color: '#666666', fontSize: 20, fontWeight: 'bold'}}> / 1500
                            kcal</Text>
                    </View>

                    <Text style={{marginVertical:'2%'}}>일주일 간 섭취한 평균 영양성분</Text>
                    <View style={styles.pieWrapper}>
                        <PieChart
                            data={pieData}
                            width={pieSize} // 동적으로 계산된 너비
                            height={pieSize} // 동적으로 계산된 높이
                            showText={true}
                            textSize={12}
                            radius={pieSize / 2} // 동적으로 반지름 계산
                            innerRadius={pieSize / 6} // 내부 원의 반지름
                            showValuesAsLabels={true}
                            labelsPosition={'mid'}
                        />
                    </View>

                    <View style={styles.frogAndBubbleContainer}>
                        <Image source={frog} style={styles.frogImage} resizeMode="contain"/>
                        <View style={styles.bubbleWrapper}>
                            <View style={styles.bubbleWithTriangle}>
                                <View style={styles.triangle}/>
                                <View style={styles.bubble}>
                                    <Text style={{fontSize: 16, color: 'white', textAlign: 'center'}}>
                                        단백질이 부족해요!
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.seperateLine}/>

                    <Text style={{marginVertical:'2%'}}>일주일 간 나의 섭취칼로리량 그래프</Text>

                        <View style={styles.barWrapper}>
                            <BarChart
                                data={barData}
                                width={270} // 화면 크기에 맞게 조정
                                height={200} // 높이 설정
                                disablePress
                                initialSpacing={20} // 첫 번째 막대기 공백
                                spacing={30} // 막대기끼리 서로 공백
                                barWidth={15}
                                frontColor={'#D9D9D9'} // 막대기 색상
                                xAxisColor={'#D9D9D9'}
                                yAxisColor={'#D9D9D9'}
                                yAxisTextStyle={{fontSize: 14, color: 'black'}}
                                yAxisThickness={1}
                                noOfSections={4} // y축 개수
                                disableScroll
                            />
                        </View>
                        <Text style={{fontSize:12, marginBottom: '10%'}}>칼로리(kcal)/날짜</Text>

                        <TouchableOpacity style={styles.infoEdit} onPress={() => navigation.navigate('InfoEditScreen')}>
                            <IconF name="edit" size={16} color="#666666"/>
                            <Text style={{color: '#666666'}}> 회원 정보 수정</Text>
                        </TouchableOpacity>

                    </ScrollView>
                    <View style={styles.tapMenu}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}><IconO name="home" size={25} color="#D9D9D9"/></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}><IconF name="calendar" size={25} color="#D9D9D9"/></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}><IconF name="map-pin" size={25} color="#D9D9D9"/></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AiChatScreen')}><IconI name="chatbubble-ellipses-outline" size={25}
                                                                                                     color="#D9D9D9"/></TouchableOpacity>
                    </View>

                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleWrapper: {
        height: '6%',
        justifyContent: 'center',
    },
    tapMenu: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        backgroundColor: '#FCFBFC',
        paddingTop: '5%',
        paddingBottom: '8%',
    },
    period: {
        backgroundColor: '#4C4334',
        width: 80,
        height: 20,
        borderRadius: 10,
        marginVertical: '4%',
    },
    kcalValue: {
        width: '100%',
        height: '6%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '16%',
    },
    frogAndBubbleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    frogImage: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    bubbleWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    bubbleWithTriangle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    triangle: {
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#4C4334',
        transform: [{rotate: '270deg'}],
    },
    bubble: {
        backgroundColor: '#4C4334',
        padding: 10,
        borderRadius: 8,
        maxWidth: 150,
        marginLeft: -5,
    },
    seperateLine: {
        width: '80%',
        height: 1,
        backgroundColor: '#D9D9D9',
        marginVertical: '4%',
    },
    pieWrapper: {
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        flexGrow: 1,
    },
    barWrapper: {
        marginVertical: 20,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoEdit: {
        height: '20%',
        marginBottom: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ProfileScreen;
