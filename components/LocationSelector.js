import React, {useState} from 'react'
import {View, Button, Text, StyleSheet, Alert} from 'react-native'
import * as Location from 'expo-location'
import MapPreview from './MapPreview'
import { useNavigation } from '@react-navigation/native'

const LocationSelector = props => {
    const navigation = useNavigation()
    const [pickedLocation, setPickedLocation] = useState()

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        })
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
        props.onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
    }

    const handlePickOnMap = async () => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) return;
        navigation.navigate('Map');
    }
    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert (
                'Permisos insuficientes',
                'Necesita dar permisos de la localizacion para usar la aplicacion',
                [{text: 'ok'}],
            )
            return false;
        }
        return true;
    }

    return (
        <View>
            <View>
                <MapPreview location={pickedLocation}>
                    <Text>location en proceso</Text>
                </MapPreview>
            </View>
            <Button
                title="Obtener Ubicacion"
                onPress={handleGetLocation}
            />
            <Button
                title='Elegir del mapa'
                onPress={handlePickOnMap}
            />
        </View>
    )
}


export default LocationSelector