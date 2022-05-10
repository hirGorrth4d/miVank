import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import LocationSelector from '../components/LocationSelector';
import { NavigationContainer } from "@react-navigation/native";

// stacks
import PlaceNavigator from './PlaceNavigator'


function Benefits() {
  return (
    <NavigationContainer>
      <View>
        <Text>Aca va a haber locales con geolocalizacion para ver beneficios del banco en comercios</Text>
        <LocationSelector />
        
        <PlaceNavigator />
      </View>
    </NavigationContainer>
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
      