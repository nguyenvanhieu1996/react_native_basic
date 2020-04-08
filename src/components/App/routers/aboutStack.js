import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import About from '../about'
import Header from '../shared/Header'

// add style, add jsx, remove arrow in header
const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="About"/>,
            }
        }
    }, 
    
}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: 'skyblue', height: 40}
    }
});

export default AboutStack

