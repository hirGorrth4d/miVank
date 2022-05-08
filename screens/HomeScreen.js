import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import Cards from '../components/cards';
// import data from '../data.json';

function HomeScreen() {
    // const [saldo, setSaldo] = useState({})

    return (
        <View style={styles.container}>
            <Cards titulo="Saldo" info="Este es tu saldo"/>
            <Cards titulo="Movimientos" info="ultimo movimiento"/>
            <Cards titulo="Tarjetas" info="Saldo de tarjeta"/>
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
