import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Cards from '../components/cards';

function CreditCards() {
  return (
    <View style={styles.container}>
      <Cards titulo="Mastercard" info="Tu saldo al cierre es $10.893,41"/>
      <Cards titulo="Visa" info="Esperando cierre de la tarjeta"/>
    </View>
  )
}

export default CreditCards

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        },
    });
    