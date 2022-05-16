import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import LocationSelector from '../components/LocationSelector';


// stacks
import PlaceNavigator from '../navigation/PlaceNavigator'


function Benefits() {
  return (

      <View>
        <Text>Aca va a haber locales con geolocalizacion para ver beneficios del banco en comercios</Text>
        <LocationSelector />
        
        <PlaceNavigator />
      </View>

  )
}

export default Benefits

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
      });
      