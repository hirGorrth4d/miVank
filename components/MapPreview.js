import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import MAP from '../constants/Maps'

function MapPreview(props) {

    const mapPreviewUrl = props.location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &markers=color:red%7Clabel:C%7C${props.location.lat},${props.location.lng}&key=${MAP.API_KEY}`
    : ''
  return (
    <View style={{...styles.mapPreview, ...props.style}}>
        {props.location
        ? <Image style={styles.mapImage}source={{uri: mapPreviewUrl}} />
        : (props.children)
    }
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create ({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height:"100%"
    }
})