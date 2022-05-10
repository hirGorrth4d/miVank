import React, {useState, useEffect} from 'react'
import {View, Button, Text, StyleSheet, Alert} from 'react-native'
import * as Location from 'expo-location'
import MapPreview from './MapPreview'
import { useNavigation, useRoute } from '@react-navigation/native'
import COLORS from '../constants/colors'
const LocationSelector = props => {
    const navigation = useNavigation()
    const [pickedLocation, setPickedLocation] = useState()
    const route = useRoute()

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

    const mapLocation = route?.params?.mapLocation

    useEffect(() => {
        if(mapLocation){
            setPickedLocation(mapLocation)
            props.onLocation(mapLocation)
        }
    }, [mapLocation])
    

    return (
        <View style={styles.container}>
            <View>
                <MapPreview location={pickedLocation} style={styles.preview}>
                    <Text>location en proceso</Text>
                </MapPreview>
            </View>
            <View style={styles.actions}>

                <Button
                    title="Obtener Ubicacion"
                    onPress={handleGetLocation}
                />
                <Button
                    title='Elegir del mapa'
                    onPress={handlePickOnMap}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.BLUSH,
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})


export default LocationSelector