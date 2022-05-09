import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { useSelector } from 'react-redux';
import MapPreview from '../components/MapPreview';

const PlaceDetailScreen = ({route}) => {
    const { placeID } = route.params;
    
    const place = useSelector(state => state.places.places.find(item => item.id === placeID));
    console.log("////////////");
    console.log(place.image);
    console.log("////////////");
    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri:place.image}}/>
            <View>
                <View >
                    <Text>{place.address}</Text>
                </View>
                <MapPreview location={{lat: place.lat, lng: place.lng}}>
                    <Text>Ubicacion no disponible.</Text>
                </MapPreview>
            </View>
        </ScrollView>
    )
}
export default PlaceDetailScreen