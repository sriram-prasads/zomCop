import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import SearchBar from './app/components/SearchBar';

const App = () => {
  return (
    
    <NavigationContainer>
     
      <Tabs />
    </NavigationContainer>
  );
}

export default App;