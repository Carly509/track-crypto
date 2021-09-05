import * as React from "react";
import { View, Text } from "react-native";
import Provider from 'react-redux';

import Store from './src/store';
import { CryptoContainer } from "./src/components/CryptoContainer";
import { Header } from "./src/components/Header";

export default function App() {
  return (
    <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
}
