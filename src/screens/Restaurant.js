import React, {useRef} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';
import {styles} from '../styles';
import tailwind from 'twrnc';
import Header from '../components/Header';

const MAX_HEIGHT = 135;
const MIN_HEIGHT = 70;
const SCROLL_DISTANCE = MAX_HEIGHT - MIN_HEIGHT;

const Restaurant = () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  let headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [MAX_HEIGHT, MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.flx1]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollOffsetY},
              },
            },
          ],
          {useNativeDriver: false},
        )}
        style={[tailwind`bg-white`]}>
        <View style={tailwind`h-35`} />
      </ScrollView>
      <Animated.View
        style={[
          tailwind`absolute overflow-hidden bg-white shadow-2xl w-full p-2`,
          styles.flx1,
          {height: headerScrollHeight, zIndex: 100},
        ]}>
        <Header />
      </Animated.View>
    </View>
  );
};

export default Restaurant;
