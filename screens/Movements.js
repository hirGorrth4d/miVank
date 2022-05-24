import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import purchaseData from  "../models/purchase"

function Movements() {
  const renderPurchase = ({item}) => {
    <View style={styles.purchase}>
      <View>
        <Text>{item.tienda}</Text>
        <Text>{item.price}</Text>
        <Text>{item.purchaseDate}</Text>
      </View>
    </View>
    purchaseData.map(x => {
      
    })
  }
  return (
    <View><Text>Ultimos Movimientos</Text>
      <FlatList
        data={purchaseData} 
        renderItem={renderPurchase}
        />
    </View>
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
  