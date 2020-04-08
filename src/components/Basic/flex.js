import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const Flex = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: '#ddd'
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
        flex: 1,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 20,
        flex: 1,

    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 30,
        flex: 1,

    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 40,
        flex: 1,

    }
})
export default Flex