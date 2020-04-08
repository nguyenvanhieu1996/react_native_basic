import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeApp from '../home';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const rootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
})

export default createAppContainer(rootDrawerNavigator)