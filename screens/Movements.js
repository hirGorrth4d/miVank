import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import purchaseData from  "../models/purchase"

const Item = ({tienda, price, purchaseDate}) => {
  <View style={styles.purchase}>
      <View>
        <Text>{tienda}</Text>
        <Text>{price}</Text>
        <Text>{purchaseDate}</Text>
      </View>
    </View>
}
function Movements() {
  const renderPurchase = ({item}) => {
    <Item tienda={item.tienda} price={item.price} purchaseDate={item.purchaseDate} />
  }
  return (
    <SafeAreaView style={styles.container}><Text>Ultimos Movimientos</Text>

      <FlatList
        data={purchaseData} 
        renderItem={renderPurchase}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  )
}

export default Movements

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    purchase: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: "1px",
      paddingBottom: "12px",
      marginBottom: "12px"
    }
  });
  