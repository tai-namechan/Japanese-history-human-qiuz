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
          ios: "ca-app-pub-3488366423563341/5687545601" , // iOS
          android:"広告ユニットID" , // android 
        })
      } // Test ID, Replace with your-admob-unit-id
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={(err) => {
      console.log(err);
    }}
  />
);

export const InterstitialAds = async() => {
  
  // AdMobInterstitial.setAdUnitID("ca-app-pub-3488366423563341/9380212758");
  // AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
  // AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

  if(__DEV__){
    AdMobInterstitial.setAdUnitID('ca-app-pub-3488366423563341/9380212758'); // テスト広告
  }else{
    if(Platform.OS === 'ios'){
      AdMobInterstitial.setAdUnitID('ca-app-pub-3488366423563341/9380212758'); //iOS
    }else{
      AdMobInterstitial.setAdUnitID('広告ユニットID'); //android
    }
  }
  await AdMobInterstitial.requestAdAsync();
  await AdMobInterstitial.showAdAsync();
}