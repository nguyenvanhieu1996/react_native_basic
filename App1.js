import React from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Home from './src/components/Basic';
import State from './src/components/Basic/state';
import Header from './src/components/Header';
import Content from './src/components/Content';
import Flex from './src/components/Basic/flex';

import HomeApp from './src/components/App/home';

export default function App() {
  return (
    <TouchableWithoutFeedback onPess={() => {
      Keyboard.dismiss()
    }}>
      <View>
    <Home />
    <State />

    <Header />
    <Content />

    <Flex />
      </View>
    </TouchableWithoutFeedback>

    // <HomeApp />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
