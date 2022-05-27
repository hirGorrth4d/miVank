import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import TarjetasCards from '../components/tarjetasCard';
import balance from '../components/balance'

function CreditCards() {
  return (
    <View style={styles.container}>
      <TarjetasCards titulo="Mastercard" info={balance()}/>
      <TarjetasCards titulo="Visa" info="Esperando cierre de la tarjeta"/>
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
    