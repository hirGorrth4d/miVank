import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

function Cards(props) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>{props.titulo}</Text>
            </View>
            <Text>{props.info}</Text>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 18,
        borderColor: "#DCDADA",
        margin: 15,
        borderWidth: 1,
        width: 300,
        height: 100,
        padding: 30,
        minHeight: 100,
        maxHeight: 250,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        },
    title: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
});