import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from './styles/global'

const About = () => {
    return (
        <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
})
export default About