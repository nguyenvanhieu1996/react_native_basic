import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native'
const Header = ({ navigation, title }) => {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../../../../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={() => openMenu()} />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../../../../assets/heart_logo.png')} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -16,
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
        // marginTop: 15,
    }
})

export default Header