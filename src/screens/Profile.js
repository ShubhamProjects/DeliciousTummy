import React, {useEffect, useMemo, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import tw from 'twrnc';
import {selectCurrentLocation} from '../core/dataSlice';
import {useSelector} from 'react-redux';
import axios from 'axios';

const Profile = () => {
  const currentLocation = useSelector(selectCurrentLocation);
  const [myAddress, setMyAddress] = useState('');
  const address = useMemo(() => myAddress, [myAddress]);

  const [blinkEffect, setBlinkEffect] = useState(true);

  const blinkRef = useRef();

  const initiateBlink = () => {
    blinkRef.current = setInterval(() => {
      setBlinkEffect(prevEffect => !prevEffect);
    }, 800);
  };

  useEffect(() => {
    initiateBlink();
  }, []);

  useEffect(() => {
    if (Object.keys(address).length) {
      clearInterval(blinkRef.current);
      setBlinkEffect(true);
    }
  }, [address]);

  const getAddress = async () => {
    axios
      .get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentLocation.lat}&longitude=${currentLocation.long}&localityLanguage=en`,
      )
      .then(response => {
        setMyAddress(response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    currentLocation !== null && getAddress();
  }, [currentLocation]);

  return (
    <View style={[styles.flx1, tw`bg-violet-50`]}>
      <View
        style={[
          styles.flxr,
          styles.mt16,
          styles.m8,
          styles.bw2,
          styles.bgWhite,
          styles.br10,
          styles.pt10,
          styles.pb10,
          styles.bcLightgray,
        ]}>
        <View style={[styles.flx0_7, styles.pl6]}>
          <Text style={[tw`text-black text-lg`]}>Shubham Vishwakarma</Text>
          <Text style={[tw`text-black text-lg`]}>
            {Object.keys(address).length
              ? `${address?.city}, ${address?.principalSubdivision} - ${address?.countryName}`
              : `${blinkEffect ? 'Fetching your location...' : ''}`}
          </Text>
        </View>
        <View style={[styles.aic, styles.jcc, styles.flx0_3]}>
          <View style={[tw`rounded-full bg-purple-100 p-4`]}>
            <Text style={[tw`text-red-400 text-2xl`]}>SV</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
