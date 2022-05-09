import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import addPlace  from '../store/places.action';
import LocationSelector from '../components/LocationSelector';

const NewPlaceScreen = ({navigation}) =>{
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')

    const handlerTitleChange = text => setTitle(text)
    const handlerLocation = loc => setLocation(loc)

    const handlerSave = () =>{
        dispatch(addPlace(title,location))
        navigation.navigate('Direcciones')
    }

    return (

        <ScrollView>
            <View >
                <Text >Titulo</Text>
                <TextInput onChangeText={handlerTitleChange}/>
                <LocationSelector onLocation={handlerLocation}/>
                <Button title="Grabar Direccion" onPress={handlerSave}/>
            </View>
        </ScrollView>
    ) 
}

export default NewPlaceScreen