import { View, Text } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Balance = () => {
    const [balance, setBalance] = useState(Math.random())
    
    return (
        <View>
        <Text>{balance}</Text>
        </View>
    )
}

export default Balance