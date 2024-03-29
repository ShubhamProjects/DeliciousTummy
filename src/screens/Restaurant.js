import React, {useEffect, useState} from 'react';
import {View, ScrollView, Animated, ToastAndroid, Text} from 'react-native';
import {styles} from '../styles';
import tailwind from 'twrnc';
import Header from '../components/Header';
import RNLocation from 'react-native-location';
import {useDispatch} from 'react-redux';
import {setCurrentLocation} from '../core/dataSlice';
import Restaurantcard from '../components/Restaurantcard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MAX_HEIGHT = 140;
const MIN_HEIGHT = 64;

const restaurantData = [
  {
    name: 'Zayka',
    image: <MaterialCommunityIcons name="food" size={250} color={styles.red} />,
  },
  {
    name: 'Cygnett',
    image: (
      <MaterialCommunityIcons
        name="food-drumstick"
        size={250}
        color={styles.orange}
      />
    ),
  },
  {
    name: 'Hotel Maharaja',
    image: (
      <MaterialCommunityIcons
        name="food-fork-drink"
        size={250}
        color={styles.darksalmon}
      />
    ),
  },
  {
    name: 'Namkeen',
    image: (
      <MaterialCommunityIcons
        name="food-takeout-box"
        size={250}
        color={styles.navy}
      />
    ),
  },
  {
    name: 'Jahanbee Resigency',
    image: (
      <MaterialCommunityIcons
        name="food-turkey"
        size={250}
        color={styles.darkorange}
      />
    ),
  },
  {
    name: 'Brew Bakes',
    image: (
      <MaterialCommunityIcons
        name="food-apple"
        size={250}
        color={styles.green}
      />
    ),
  },
];

const Restaurant = ({navigation}) => {
  const dispatch = useDispatch();

  const scrollOffsetY = new Animated.Value(0);

  const diffClamp = Animated.diffClamp(scrollOffsetY, MIN_HEIGHT, MAX_HEIGHT);

  const translateY = diffClamp.interpolate({
    inputRange: [MIN_HEIGHT, MAX_HEIGHT],
    outputRange: [0, -MIN_HEIGHT],
  });

  const [localLocation, setLocalLocation] = useState({});

  useEffect(() => {
    location();
  }, []);

  useEffect(() => {
    if (Object.keys(localLocation)?.length) {
      dispatch(setCurrentLocation(localLocation));
    }
  }, [localLocation]);

  const location = () => {
    RNLocation.configure({
      distanceFilter: 5.0,
      desiredAccuracy: {
        ios: 'best',
        android: 'highAccuracy',
      },
      androidProvider: 'auto',
      interval: 5000,
      fastestInterval: 10000,
      maxWaitTime: 5000,
    });

    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then(granted => {
      if (granted) {
        RNLocation.subscribeToLocationUpdates(locations =>
          setLocalLocation({
            lat: locations[0].latitude,
            long: locations[0].longitude,
          }),
        );
      } else {
        ToastAndroid.show('Failed to fetch your location.', ToastAndroid.LONG);
      }
    });
  };

  return (
    <View style={[styles.flx1]}>
      <Animated.View
        style={[
          tailwind`absolute rounded-b-xl overflow-hidden bg-white shadow-2xl w-full p-2 `,
          styles.flx1,
          {
            transform: [{translateY: translateY}],
            top: 0,
            left: 0,
            right: 0,
            height: MAX_HEIGHT,
            elevation: 4,
            zIndex: 100,
          },
        ]}>
        <Header navigation={navigation} />
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={e => {
          scrollOffsetY.setValue(e.nativeEvent.contentOffset.y);
        }}
        style={[tailwind`bg-slate-50`]}>
        <View style={tailwind`h-35`} />
        <>
          {restaurantData.map((item, index) => (
            <Restaurantcard key={index?.toString()} item={item} index={index} />
          ))}
        </>
      </ScrollView>
    </View>
  );
};

export default Restaurant;
