import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import PlaceItem from '../components/PlaceItem';

const PlaceListScreen = ({navigation}) => {
    let places = useSelector(state => state.places);


    const renderItem = ({item}) => (
        <PlaceItem
            title={item.title}
            image={item.image}
            address={item.address}
            onSelect={() => navigation.navigate('Detalle', {
                placeID: item.id
            })}
        />

    )

    return (
        <FlatList
            data={places.places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}


export default PlaceListScreen