import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <>
            <View>
                <Text style={styles.header}>Header</Text>
                <View style={styles.container}>
                    <Text style={styles.container}>Hi</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.colorWhite}>Hi</Text>
                    <Text style={styles.colorWhite}>Hi</Text>
                    <Text style={styles.colorWhite}>Hi</Text>
                    <Text style={styles.colorWhite}>Hi</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    header: {
        backgroundColor: 'blue',
    },
    body: {
        backgroundColor: 'black',
    },
    colorWhite: {
        color: '#fff'
    }

})
export default Home