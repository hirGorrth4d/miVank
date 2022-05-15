import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import PlaceItem from '../components/PlaceItem';
import * as addressAction from '../store/places.action'
const PlaceListScreen = ({navigation}) => {
    let places = useSelector(state => state.places);

    const dispatch = useDispatch()
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
    useEffect(() =>{
        dispatch(addressAction.loadAddress())
    }, [])

    return (
        <FlatList
            data={places.places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}


export default PlaceListScreen