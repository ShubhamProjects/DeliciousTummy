import React, {useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import tw from 'twrnc';
import {selectCurrentLocation} from '../core/dataSlice';
import {useSelector} from 'react-redux';
import axios from 'axios';
import ScrollableInfo from '../components/ScrollableInfo';

const Profile = () => {
  const currentLocation = useSelector(selectCurrentLocation);
  const [myAddress, setMyAddress] = useState('');
  const address = useMemo(() => myAddress, [myAddress]);

  const [blinkEffect, setBlinkEffect] = useState(true);
  const [focusedTab, setFocusedTab] = useState(0);

  const blinkRef = useRef();
  const sectionPressed = useRef();
  const imperativeHandle = useRef();

  const initiateBlink = () => {
    blinkRef.current = setInterval(() => {
      setBlinkEffect(prevEffect => !prevEffect);
    }, 800);
  };

  const handleTabPress = section => {
    const onSectionPressed = () => {
      switch (section) {
        case 'Recent Orders':
          return (sectionPressed.current = 0);

        case 'Suggestions for you':
          return (sectionPressed.current = 600);
        case 'About Us':
          return (sectionPressed.current = 1500);
      }
    };
    imperativeHandle.current.scrollHandler(onSectionPressed());
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
          <TouchableOpacity style={[tw`rounded-full bg-purple-100 p-4`]}>
            <Text style={[tw`text-red-400 text-2xl`]}>SV</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.mt8, styles.mb8, tw`border-b border-gray-300`]}>
        <View
          style={[
            styles.ml8,
            styles.mr8,
            styles.flxr,
            styles.jcsb,
            styles.aic,
          ]}>
          <TouchableOpacity
            onPress={() => handleTabPress('Recent Orders')}
            style={[
              tw`${focusedTab <= 450 ? 'border-b border-gray-500' : ''}`,
            ]}>
            <Text
              style={[
                tw`${
                  focusedTab <= 450
                    ? 'text-red-400 text-base'
                    : 'text-black italic'
                }`,
              ]}>
              Recent Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress('Suggestions for you')}
            style={[
              tw`${
                focusedTab > 450 && focusedTab <= 1000
                  ? 'border-b border-gray-500'
                  : ''
              }`,
            ]}>
            <Text
              style={[
                tw`${
                  focusedTab > 450 && focusedTab <= 1000
                    ? 'text-red-400 text-base'
                    : 'text-black italic'
                }`,
              ]}>
              Suggestions for you
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress('About Us')}
            style={[
              tw`${focusedTab > 1000 ? 'border-b border-gray-500' : ''}`,
            ]}>
            <Text
              style={[
                tw`${
                  focusedTab > 1000
                    ? 'text-red-400 text-base'
                    : 'text-black italic'
                }`,
              ]}>
              About Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollableInfo setFocusedTab={setFocusedTab} ref={imperativeHandle} />
    </View>
  );
};

export default Profile;
