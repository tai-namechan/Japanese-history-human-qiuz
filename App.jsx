import React, { Component, useContext } from 'react';
import { Navigation } from './src/navigations/Navigation.jsx';
import { SafeAreaView } from 'react-native';
// import { SoundContext } from './provider/SoundProvider.js';

export default function App ()  {
  // const {onSound, toggleOnSound} = useContext(SoundContext)
    return (
      <>
        <Navigation />
        <SafeAreaView />
      </>
    )
  
}

