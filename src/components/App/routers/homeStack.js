import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import HomeApp from '../home'
import ReviewDetail from '../reviewDetail'
import About from '../about'
import Header from '../shared/Header'
// add style, add jsx, remove arrow in header
const screens = {
    Home: {
        screen: HomeApp,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="GameZone" />,
            }
        }
    },
    ReviewDetail: {
        screen: ReviewDetail,
        navigationOptions: {
            title: 'Review Detail'
        }
    },

}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: 'skyblue', height: 40 },
    }
});

export default HomeStack

