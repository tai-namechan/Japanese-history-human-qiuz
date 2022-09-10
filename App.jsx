import React, { Component, useContext } from 'react';
import { Navigation } from './src/navigations/Navigation.jsx';
import { SafeAreaView } from 'react-native';
import { AuthProvider } from './src/context/AuthContext.js';
import { SoundProvider } from './src/context/SoundContext.js';

export default function App ()  {
    return (
      <AuthProvider>
        <SoundProvider>
          <Navigation />
          <SafeAreaView />
        </SoundProvider>
      </AuthProvider>
    )
  
}

