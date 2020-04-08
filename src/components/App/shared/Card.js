import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native'
const Card = ({ children }) => {

    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 3,
        shadowOpacity: .3,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
})

export default Card