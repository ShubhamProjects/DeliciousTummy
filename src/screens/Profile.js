import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import tw from 'twrnc';

const Profile = () => {
  return (
    <View style={[styles.flx1, styles.jcc, styles.aic]}>
      <Text style={tw`text-green-600`}>Profile</Text>
    </View>
  );
};

export default Profile;
