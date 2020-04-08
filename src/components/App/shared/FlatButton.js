import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FlatButton = ({ text, onPress, style }) => {

    return (
        <TouchableOpacity onPress={() => onPress()} style={style}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        backgroundColor: 'skyblue',
        marginHorizontal: 10,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 3,
        shadowOpacity: .3,
        paddingVertical: 8,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})

export default FlatButton