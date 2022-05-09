import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';


const PlaceItem = ({ title, image, address, onSelect}) => {
    console.log(title);
    console.log(image);
    return (
        <TouchableOpacity
            onPress={onSelect}
            style={styles.placeItem}
        > 
        {/* { isStatic:true, uri: 'image'} */}
            <Image style={styles.image} source={{isStatic:true, uri: image,}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text styles={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default PlaceItem;
