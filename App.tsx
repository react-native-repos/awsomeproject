import React from 'react'
import {
    View,
    Text,
    SafeAreaView    //To work properly with notch screen and other things in production
} from 'react-native'

function app() {
    return(
        <SafeAreaView>
        <View>
            <Text>Hello World !</Text>
            <Text>Hello World !</Text>
            <Text>Hello World !</Text>
        </View>
        </SafeAreaView>
    )
}

export default app