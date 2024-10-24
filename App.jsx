import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from './src/screens/LoginScreen';
import StartScreen from './src/screens/StartScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginDetailScreen from './src/screens/LoginDetailScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import MapScreen from './src/screens/MapScreen';
import AiChatScreen from './src/screens/AiChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import InfoEditScreen from './src/screens/InfoEditScreen';


const Stack = createNativeStackNavigator();

class App extends Component {
    render() {
        return (
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={'LoginScreen'}
                        screenOptions={{
                            headerShown: false,
                            contentStyle: {backgroundColor: 'white'},
                        }}
                    >
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="StartScreen" component={StartScreen} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />
                        <Stack.Screen name="LoginDetailScreen" component={LoginDetailScreen} />
                        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
                        <Stack.Screen name="MapScreen" component={MapScreen} />
                        <Stack.Screen name="AiChatScreen" component={AiChatScreen} />
                        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                        <Stack.Screen name="InfoEditScreen" component={InfoEditScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
        );
    }
}

export default App;
