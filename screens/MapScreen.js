import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {useState} from 'react'
import { useLayoutEffect } from "react";
import MapView from "react-native-maps";
import { TouchableOpacity } from "react-native-web";


const MapScreen = () =>{
    const [selectedLocation, setSelectedLocation] = useState()
    const navigation = useNavigation()
    const initialRegion = {
        latitude:37.4219023,
        longitude: -122.0839984,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const handleSaveSelection = () =>{
        if(selectedLocation) {
           navigation.navigate("Nuevo", {mapLocation: selectedLocation})
        }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleSaveSelection}>
                    <Ionicons name="md-save-outline" color="white" size={22}/>
                </TouchableOpacity>
            )
        })
    }, [navigation, handleSaveSelection])

    const handlerSelectionLocation = event =>{
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }
    return (
        <MapView initialRegion={initialRegion} onPress={handlerSelectionLocation}>
            {selectedLocation && (
                <Marker 
                    title="Ubicacion seleccionada"
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng
                    }}/>
            )}
        </MapView>
    )
}

export default MapScreen