import React, { useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import About from './src/components/App/about';
import { AppLoading } from 'expo';
import Navigation from './src/components/App/routers/drawer'
//  import { globalStyles } from './styles/global'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/font/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/font/Nunito-Bold.ttf'),

})
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (fontsLoaded) {
    return (
      <Navigation />
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={setFontsLoaded(true)} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
