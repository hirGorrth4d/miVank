import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import Cards from '../components/cards';
import { auth } from '../firebase';
import balance from '../components/balance'


function HomeScreen() {
    // const [saldo, setSaldo] = useState({})
    const navigation = useNavigation()
    const handleSignout = () => {
        auth
            .signOut()
            .then(()=> {
                navigation.navigate('Login')
            })
            .catch(error => alert(error.message))
    }

    const movementRedirect = () =>{
        navigation.navigate('Movimientos')
    }
    const cardRedirect = () =>{
        navigation.navigate('Tarjetas')
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>Email: {auth.currentUser?.email}</Text>
                <Cards titulo="Tu Saldo actual" info={balance()}/>
                <TouchableOpacity  onPress={movementRedirect}>
                    <Cards titulo="Movimientos" info="ultimo movimiento"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={cardRedirect}>
                    <Cards titulo="Tarjetas" info="Tenes saldos pendientes en tu tarjeta"/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignout}
                >
                    <Text>Sign out</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});
