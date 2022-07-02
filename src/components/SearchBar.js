import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import tailwind from 'twrnc';
import {styles} from '../styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SearchBar = () => {
  const [searchedText, setSearchedText] = useState('');

  const onSearchTextEntered = text => {
    setSearchedText(text);
  };

  return (
    <View
      style={[
        tailwind`rounded-xl h-14 w-auto bg-gray-100`,
        styles.ml4,
        styles.mr4,
        styles.mt10,
      ]}>
      <View style={[styles.flx1, styles.jcsb, styles.flxr]}>
        <TextInput
          placeholder="Search for food or restaurant"
          placeholderTextColor={styles.grey}
          style={[
            {color: 'black'},
            tailwind`w-10/12 text-base ml-2 ${
              searchedText === ''
                ? 'italic font-light'
                : 'not-italic font-semibold'
            }`,
          ]}
          onChangeText={text => onSearchTextEntered(text)}
          value={searchedText}
        />
        <View
          style={tailwind`border-l-2 border-slate-300 mt-2 mb-2 pl-2 pr-2 justify-center`}>
          <TouchableOpacity>
            <EvilIcons name="search" size={35} color={styles.red} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
