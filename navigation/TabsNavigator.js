import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from '../screens/HomeScreen'
import Movements from '../screens/Movements'
import CreditCards from '../screens/CreditCards'
import Benefits from '../screens/Benefits';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name='Login' component={LoginScreen} />
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Movimientos' component={Movements} />
            <Tab.Screen name='Tarjetas' component={CreditCards} />
            <Tab.Screen name='Beneficios' component={Benefits} />
        </Tab.Navigator>

    );
}

export default TabNavigator