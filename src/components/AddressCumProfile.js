import React, {useState, useEffect, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import tailwind from 'twrnc';
import {styles} from '../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const AddressCumProfile = ({address}) => {
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

  return (
    <View
      style={[styles.flxr, styles.jcsb, styles.ml4, styles.mr4, styles.mt2]}>
      <View style={[styles.ml2]}>
        <View style={[styles.flxr, styles.aic]}>
          {blinkEffect ? (
            <View style={[styles.w25]}>
              <MaterialIcons
                name="my-location"
                size={25}
                color={styles.green}
              />
            </View>
          ) : (
            <View style={[styles.w25]} />
          )}
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
        <Text style={[tailwind`text-slate-400`]}>
          {Object.keys(address).length
            ? `${address?.city}, ${address?.principalSubdivision} - ${address?.countryName}`
            : 'Fetching your location...'}
        </Text>
      </View>

      <View>
        <View>
          <TouchableOpacity
            style={[
              tailwind`p-1 rounded-full bg-red-100 border-red-600 mr-2`,
              styles.bw1,
            ]}>
            <MaterialCommunityIcons
              name="account"
              color={styles.red}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(AddressCumProfile);
