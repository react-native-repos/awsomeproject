import React  from "react";
import {
    View,
    Text,
    StyleSheet, // component for styling
    useColorScheme  // For Dark and Light mode customization   (Appereance module)
} from 'react-native'

// This will always return jsx element
function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'

    // Applying styles on views
    return(
        <View style={styles.container}>
            <Text style={isDarkMode? styles.darkText : styles.darkText}>Hello World ! </Text>
        </View>
    )
}

// creating styles (Takes an object of key value pairs)
const styles = StyleSheet.create({
    // binding key & value pairs
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    lightText:{
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    },
    darkRedText:{
        color: '#8B0000'
    }
})

export default AppPro

