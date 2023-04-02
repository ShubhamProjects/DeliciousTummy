import React, {useState, useEffect, useMemo} from 'react';
import {View} from 'react-native';
import {styles} from '../styles';
import AddressCumProfile from './AddressCumProfile';
import SearchBar from './SearchBar';
import {useSelector} from 'react-redux';
import {selectCurrentLocation} from '../core/dataSlice';

const Header = () => {
  const currentLocation = useSelector(selectCurrentLocation);
  const [myAddress, setMyAddress] = useState('');
  const address = useMemo(() => myAddress, [myAddress]);

  const getAddress = async () => {
    try {
      if (currentLocation !== null) {
        await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentLocation.lat}&longitude=${currentLocation.long}&localityLanguage=en`,
        )
          .then(response => response.json())
          .then(response => JSON.stringify(setMyAddress(response)))
          .catch(err => console.error(err));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    currentLocation !== null && getAddress();
  }, [currentLocation]);

  return (
    <View style={[styles.flx1, styles.ml2, styles.mr2]}>
      <AddressCumProfile address={address} />
      <SearchBar />
    </View>
  );
};

export default Header;
