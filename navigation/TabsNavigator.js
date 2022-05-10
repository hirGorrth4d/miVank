import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from './screens/HomeScreen'
import Movements from './screens/Movements'
import CreditCards from './screens/CreditCards'
import Benefits from './screens/Benefits';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen name='Movimientos' component={Movements} />
                <Tab.Screen name='Tarjetas' component={CreditCards} />
                <Tab.Screen name='Beneficios' component={Benefits} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigator