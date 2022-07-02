import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles';
import AddressCumProfile from './AddressCumProfile';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <View style={[styles.flx1, styles.ml2, styles.mr2]}>
      <AddressCumProfile />
      <SearchBar />
    </View>
  );
};

export default Header;
