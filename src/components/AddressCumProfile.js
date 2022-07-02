import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import tailwind from 'twrnc';
import {styles} from '../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const AddressCumProfile = () => {
  return (
    <View
      style={[styles.flxr, styles.jcsb, styles.ml4, styles.mr4, styles.mt2]}>
      <View style={[styles.ml2]}>
        <View style={[styles.flxr, styles.aic]}>
          <MaterialIcons name="my-location" size={25} color={styles.green} />
          <Text style={[tailwind`text-black font-semibold ml-2 text-lg`]}>
            Delivery Address
          </Text>
          <Entypo
            name="chevron-down"
            size={24}
            color={styles.gray}
            style={[styles.ml2, styles.h23]}
          />
        </View>
        <Text style={[tailwind`text-slate-400`]}>My address</Text>
      </View>

      <View>
        <View style={[tailwind`p-1 rounded-full bg-slate-500 mr-2`]}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account"
              color={styles.white}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddressCumProfile;
