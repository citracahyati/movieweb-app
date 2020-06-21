import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// import {SvgUri} from 'react-native-svg';
import logoheader from '../assets/logoheader.svg';
import t from 'tailwind-rn';

function Header() {
  return (
    <View
      style={[
        t('flex-row py-4 px-4 justify-between items-center '),
        {backgroundColor: '#032541'},
      ]}>
      <View style={t('')}>
        <TouchableOpacity>
          <Image
            style={t('h-4 w-4')}
            source={require('../assets/burgericon.png')}
          />
        </TouchableOpacity>
      </View>
      {/* <SvgUri width="200" height="200" svgXmlData={logoheader} /> */}
      <View style={t('flex-row')}>
        <TouchableOpacity>
          <Image
            style={t('h-4 w-4')}
            source={require('../assets/peopleicon.png')}
          />
        </TouchableOpacity>
        <View style={t('p-2')} />
        <TouchableOpacity>
          <Image
            style={t('h-4 w-4')}
            source={require('../assets/searchicon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
