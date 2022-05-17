import * as FileSystem from 'expo-file-system'
import  MAP  from '../constants/Map'
import { insertAddress, fetchAddress } from '../db'

export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'

const addPlace = (title, image, location) =>{
    return async dispatch => {
        const response = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP.API_KEY}`)

        if (!response.ok) throw new ERROR ('error de comunicacion con google MAPS api');

        const resData = await response.json()

        if(!resData.results) throw new Error('no se pudieron encontrar las coordenadas')

        const address = resData.results[0].formatted_address;
        console.log(address)

        console.log('Dispatching')

        const fileName = image.split('/').pop()

        const Path = FileSystem.documentDirectory + fileName

        console.log('-------------------------------------')
        console.log('image: ' + image)
        console.log(`filename: ${fileName}`)
        console.log(`Path: ${Path}`)
        console.log('----------------------------')

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })
            const result = await insertAddress(
                title,
                Path,
                'Address',
                13.4,
                10.5
            )
            console.log(result)
            dispatch({type: ADD_PLACE, payload: {id: result.insertId, title, image: Path}})
        } catch (err) {
            console.log(err)
            throw err
        }
        dispatch({type: ADD_PLACE, payload: {title, address, image: Path, lat: location.lat,lng: location.lng}})
    }
}

export const loadAddress = () =>{
    return async dispatch => {
        try {
            const result = await fetchAddress()
            console.log(result)
            dispatch({type: LOAD_PLACES, places: result.rows._array})
        } catch (error) {
            throw error
        }
    }
}

export default addPlace