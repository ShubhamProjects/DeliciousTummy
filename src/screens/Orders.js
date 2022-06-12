import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import tw from 'twrnc';

const Orders = () => {
  return (
    <View style={[styles.flx1, styles.jcc, styles.aic, styles.bgLime]}>
      <Text style={tw`text-red-600 h-20 w-40 border font-semibold`}>
        Orders
      </Text>
    </View>
  );
};

export default Orders;
