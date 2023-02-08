import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
        <Home />
    </NavigationContainer>
  );
}