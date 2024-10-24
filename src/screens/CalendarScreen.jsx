import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import IconO from 'react-native-vector-icons/Octicons';
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';

class CalendarScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <Text>Calendar 임니다</Text>

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
});

export default CalendarScreen;
