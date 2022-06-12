/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './src/styles';

const App = () => {
  return (
    <View style={[styles.flx1, styles.jcc, styles.aic, styles.bgWhite]}>
      <TouchableOpacity
        style={[
          styles.bw1,
          styles.w200,
          styles.h40,
          styles.jcc,
          styles.bgCoral,
        ]}>
        <Text style={[styles.brown]}>My 1st CLI App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
