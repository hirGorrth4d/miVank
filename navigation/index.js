import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './TabsNavigator';
import LoginScreen from '../screens/LoginScreen';

// stacks


export default () => (
    <NavigationContainer>
        {/* <LoginScreen />  */}
        <TabNavigator />
    </NavigationContainer>
)