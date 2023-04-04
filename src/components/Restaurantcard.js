import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import {styles} from '../styles';

const Restaurantcard = ({item}) => {
  return (
    <TouchableOpacity
      style={[
        tailwind`bg-white border border-gray-300 m-4 shadow-md shadow-emerald-400 rounded-md`,
      ]}>
      <View style={[styles.aic, tailwind`bg-stone-50`]}>{item?.image}</View>
      <View style={[styles.bt1, styles.aic, styles.brtLightgray, styles.br2t]}>
        <Text style={[tailwind`text-black text-lg`]}>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Restaurantcard;
