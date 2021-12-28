import React from 'react';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import { Platform } from 'react-native';

export const BottomBannerAds = () => (
  <AdMobBanner
    bannerSize="banner"
    adUnitID={
        __DEV__ ? "ca-app-pub-3940256099942544/6300978111" // テスト広告
        : Platform.select({
          ios: "ca-app-pub-8494354802155058/8903720559" , // iOS
          android:"広告ユニットID" , // android 
        })
      } // Test ID, Replace with your-admob-unit-id
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={(err) => {
      console.log(err);
    }}
  />
);