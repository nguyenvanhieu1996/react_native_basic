import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ToDo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f63',
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        
    }

})
export default Header