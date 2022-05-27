import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from '../screens/HomeScreen'
import Movements from '../screens/Movements'
import CreditCards from '../screens/CreditCards'
import Benefits from '../screens/Benefits';
import LoginScreen from '../screens/LoginScreen';
import colors from '../constants/colors';
import { Platform } from 'react-native-web';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

        <Tab.Navigator initialRouteName="Home" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? '' : colors.DARK_SIENNA,
                },
                headerTintColor: Platform.OS === 'android' ? colors.DARK_SIENNA : 'white',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <Tab.Screen name='Login' component={LoginScreen} options={{
                tabBarIcon: ({focused}) => (
                    <Entypo name="login" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <Entypo name="home" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name='Movimientos' component={Movements} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialIcons name="account-balance" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name='Tarjetas' component={CreditCards} options={{
                tabBarIcon: ({focused}) => (
                    <AntDesign name="creditcard" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name='Beneficios' component={Benefits} options={{
                tabBarIcon: ({focused}) => (
                    <FontAwesome5 name="search-location" size={24} color="black" />
                )
            }}/>
        </Tab.Navigator>

    );
}

export default TabNavigator