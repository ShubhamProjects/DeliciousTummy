import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import tw from 'twrnc';

const Restaurant = () => {
  return (
    <View style={[styles.flx1, styles.jcc, styles.aic]}>
      <Text style={tw`text-red-600 p-10 border`}>Restaurant</Text>
    </View>
  );
};

export default Restaurant;
