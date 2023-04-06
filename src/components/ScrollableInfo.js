import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';
import {styles} from '../styles';
import tw from 'twrnc';

const ScrollableInfo = forwardRef(({setFocusedTab}, ref) => {
  const handleScroll = event => {
    let scrollValue = event.nativeEvent.contentOffset.y;
    setFocusedTab(scrollValue);
  };
  const scrollX = useRef(new Animated.Value(0)).current;

  const [refToScroll, setRefToScroll] = useState(null);

  useImperativeHandle(ref, () => ({
    scrollHandler: sectionPressed => {
      refToScroll.scrollTo({
        x: 0,
        y: sectionPressed,
        animated: true,
      });
    },
  }));

  return (
    <ScrollView
      ref={refToScroll => {
        setRefToScroll(refToScroll);
      }}
      style={[styles.flx1]}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        listener: event => handleScroll(event),
        useNativeDriver: false,
      })}
      scrollEventThrottle={16}>
      <View style={[tw`h-150 bg-yellow-300`]}>
        <Text style={[tw`text-black`]}>scroll me</Text>
      </View>
      <View style={[tw`h-150 bg-red-300`]}>
        <Text style={[tw`text-black`]}>scroll me</Text>
      </View>
      <View style={[tw`h-150 bg-teal-300`]}>
        <Text style={[tw`text-black`]}>scroll me</Text>
      </View>
    </ScrollView>
  );
});

export default ScrollableInfo;
