import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';

import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import IconO from 'react-native-vector-icons/Octicons';

import title from '../../assets/title.png';
import frog from '../../assets/frog.png';

const {width} = Dimensions.get('window');

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { navigation } = this.props;
        const { modalVisible } = this.state;


        const pieData = [
            {value: 50, color: '#5F8262', text: '50%', textColor: 'white'},
            {value: 30, color: '#83AD70', text: '30%', textColor: 'white'},
            {value: 20, color: '#BFD1B1', text: '20%', textColor: 'white'},
        ];

        const pieSize = width * 0.5;
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.titleWrapper}>
                            <Image source={title} style={styles.titleImage} resizeMode="contain"/>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                            <IconI name="person-circle-outline" size={30} color="#D9D9D9"/>
                        </TouchableOpacity>
                    </View>

                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <View style={styles.contentBox}>
                            <View style={styles.content}>
                                <View style={styles.period}>
                                    <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>TODAY</Text>
                                </View>
                                <View style={styles.kcalValue}>
                                    <Text style={{color: '#008037', fontSize: 30, fontWeight: 'bold'}}>1200 kcal</Text>
                                    <Text style={{color: '#666666', fontSize: 20, fontWeight: 'bold'}}> / 1500
                                        kcal</Text>
                                </View>
                                <View style={styles.remainKcal}>
                                    <Text style={{fontSize: 14, color: '#666666'}}>남은 섭취 칼로리 300kcal</Text>
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

                                <View style={styles.mealContainer}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#4E4236'}}>아침</Text>
                                    <Text style={{fontSize: 20, fontWeight: 'ultralight', color: '#4E4236'}}>100
                                        kcal</Text>
                                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                        <IconF name="search" size={30} color="#4C4334"/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.mealContainer}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#4E4236'}}>점심</Text>
                                    <Text style={{fontSize: 20, fontWeight: 'ultralight', color: '#4E4236'}}>100
                                        kcal</Text>
                                    <TouchableOpacity>
                                        <IconF name="search" size={30} color="#4C4334"/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.mealContainer}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#4E4236'}}>저녁</Text>
                                    <Text style={{fontSize: 20, fontWeight: 'ultralight', color: '#4E4236'}}>100
                                        kcal</Text>
                                    <TouchableOpacity>
                                        <IconF name="search" size={30} color="#4C4334"/>
                                    </TouchableOpacity>
                                </View>

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
                            </View>
                        </View>
                    </ScrollView>

                    <View style={styles.modalBox}>
                        {/* 모달 */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => this.setModalVisible(false)}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <TouchableOpacity
                                        style={styles.closeButton}
                                        onPress={() => this.setModalVisible(false)}
                                    >
                                        <IconI name="close" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text style={{fontWeight: 'bold', fontSize: 20}}>아침</Text>
                                    <View style={styles.mealInfo}>
                                        <Text style={{fontSize: 14, marginHorizontal: '5%'}}>삼겹김치찜</Text>
                                        <Text style={{fontSize: 14, marginHorizontal: '5%', color:'#666666'}}>250kcal</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.addMealButton}
                                        onPress={() => {
                                            this.setModalVisible(false);  // 먼저 모달을 닫음
                                            navigation.navigate('AddMealScreen');  // 그 후 화면 이동
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>식단 추가하기</Text>
                                    </TouchableOpacity>


                                </View>
                            </View>
                        </Modal>
                    </View>

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
    },
    header: {
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '8%',
        paddingLeft: '15%',
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleImage: {
        height: '100%',
        width: '60%',
    },
    scrollContent: {
        flexGrow: 1,
    },
    contentBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: '#EEF6FF',
        width: '90%',
        height: '95%',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: '5%',
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
        paddingHorizontal: '14%',
    },
    remainKcal: {
        height: '4%',
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
    mealContainer: {
        backgroundColor: '#FCFBFC',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        height: '8%',
        alignItems: 'center',
        paddingHorizontal: '6%',
        marginVertical: '1%',
    },
    pieWrapper: {
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
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
    modalBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
    },
    modalContent: {
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        //justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    mealInfo: {
        marginTop: '10%',
        backgroundColor: '#f2f2f2',
        width: '98%',
        height: '18%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addMealButton: {
        backgroundColor: '#4C4334',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '14%',
        bottom: -130,
    },
});

export default HomeScreen;
