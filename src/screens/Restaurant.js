import React from 'react';
import {View, ScrollView, Animated} from 'react-native';
import {styles} from '../styles';
import tailwind from 'twrnc';
import Header from '../components/Header';

const MAX_HEIGHT = 140;
const MIN_HEIGHT = 64;

const Restaurant = () => {
  const scrollOffsetY = new Animated.Value(0);

  const diffClamp = Animated.diffClamp(scrollOffsetY, MIN_HEIGHT, MAX_HEIGHT);

  const translateY = diffClamp.interpolate({
    inputRange: [MIN_HEIGHT, MAX_HEIGHT],
    outputRange: [0, -MIN_HEIGHT],
  });

  return (
    <View style={[styles.flx1]}>
      <Animated.View
        style={[
          tailwind`absolute overflow-hidden bg-white shadow-2xl w-full p-2`,
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
        <Header />
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={e => {
          scrollOffsetY.setValue(e.nativeEvent.contentOffset.y);
        }}
        style={[tailwind`bg-white`]}>
        <View style={tailwind`h-35`} />
      </ScrollView>
    </View>
  );
};

export default Restaurant;
