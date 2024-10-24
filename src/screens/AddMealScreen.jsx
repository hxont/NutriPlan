import React, {Component} from 'react';
import {Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

class AddMealScreen extends Component {
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

        return (
            <>
                <SafeAreaView style={styles.container}>
                    <View style={styles.searchMealWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}
                                          style={{marginHorizontal: '4%'}}>
                            <IconI name="arrow-back" size={25} color="black"/>
                        </TouchableOpacity>
                        <TextInput style={styles.searchMeal} />
                    </View>
                    <View style={styles.content}>
                        <Text>어떤 음식을 드셨나요?</Text>
                    </View>
                    <Text style={{fontSize: 12, textDecorationLine: 'underline', marginBottom: '1%', color: '#666666'}}>찾는 식단이 없다면</Text>
                    <TouchableOpacity style={styles.directAddButton} onPress={() => this.setModalVisible(true)}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>직접 추가하기</Text>
                    </TouchableOpacity>

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
                                    <Text style={{fontWeight: 'bold', fontSize: 20}}>식단 추가하기</Text>
                                    <Text style={{fontSize: 14, marginHorizontal: '5%', marginTop: '5%', fontWeight: 'bold'}}>음식 이름</Text>
                                    <TextInput style={styles.mealInfo} />
                                    <Text style={{fontSize: 14, marginHorizontal: '5%', marginTop: '5%', fontWeight: 'bold'}}>영양 정보</Text>
                                    <View style={styles.nutriInfo}>
                                        <View style={styles.carbs}>
                                            <Text style={{fontSize: 12, color: 'white'}}>탄수화물</Text>
                                            <Text style={{fontSize: 12, color: 'white'}}>g</Text>
                                        </View>
                                        <View style={styles.protein}>
                                            <Text style={{fontSize: 12, color: 'white'}}>단백질</Text>
                                            <Text style={{fontSize: 12, color: 'white'}}>g</Text>
                                        </View>
                                        <View style={styles.fat}>
                                            <Text style={{fontSize: 12, color: 'white'}}>지방</Text>
                                            <Text style={{fontSize: 12, color: 'white'}}>g</Text>
                                        </View>

                                        <View style={styles.kcalContainer}>
                                            <Text style={{fontWeight: 'bold', fontSize: 20}}>Kcal</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.addMealButton}
                                        onPress={() => {
                                            this.setModalVisible(false);
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>추가하기</Text>
                                    </TouchableOpacity>


                                </View>
                            </View>
                        </Modal>
                    </View>

                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    searchMealWrapper: {
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '3%',
    },
    searchMeal: {
        backgroundColor: '#EEF6FF',
        width: '80%',
        height: '100%',
        borderRadius: 30,
        paddingHorizontal: '5%',
    },
    content: {
        backgroundColor: '#F7FBF4',
        height: '80%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%',
    },
    directAddButton: {
        backgroundColor: '#4C4334',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '6%',
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
        height: 400,
        backgroundColor: '#fff',
        borderRadius: 10,
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
        marginTop: '1%',
        backgroundColor: '#d9d9d9',
        width: '80%',
        height: '10%',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    nutriInfo: {
        borderRadius: 10,
        marginTop: '1%',
        backgroundColor: '#d9d9d9',
        width: '80%',
        height: '50%',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    carbs: {
        marginTop: '5%',
        backgroundColor: '#5F8262',
        width: '95%',
        height: '18%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
    },
    protein: {
        marginTop: '2%',
        backgroundColor: '#BFD1B1',
        width: '95%',
        height: '18%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
    },
    fat: {
        marginTop: '2%',
        backgroundColor: '#83AD70',
        width: '95%',
        height: '18%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
    },
    addMealButton: {
        backgroundColor: '#4C4334',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: '10%',
        bottom: -14,
    },
    kcalContainer: {
        height: '30%',
        width: '90%',
        marginHorizontal: '5%',
        justifyContent: 'center', // 세로로 중앙 정렬
        alignItems: 'flex-end',
    },
});

export default AddMealScreen;
