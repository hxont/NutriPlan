import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

class App extends Component {
    render() {
        return (
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={'HomeScreen'}
                        screenOptions={{
                            headerShown: false,
                            contentStyle: {backgroundColor: 'white'},
                        }}
                    >
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
        );
    }
}

export default App;
