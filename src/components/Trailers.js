import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import t from 'tailwind-rn';

function Trailers() {
  return (
    <ImageBackground
      style={t('h-64 items-center justify-around mt-5')}
      source={require('../assets/image4.jpg')}>
      <View style={t('')}>
        <View style={t('flex-row items-center justify-around mt-5 mx-4')}>
          <Text style={t('text-xl text-white font-bold')}>Latest Trailers</Text>
          <TouchableOpacity>
            <View
              style={t(
                'justify-center items-center h-8 w-32 bg-gray-600 text-white font-bold rounded-full self-end',
              )}>
              <Text style={t('text-sm text-center')}>Streaming</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={t(' items-center')}>
          <View style={t('h-32 w-48 my-2 bg-gray-600 rounded-lg')} />
        </View>
        <View style={t('text-center')}>
          <Text style={t('text-center text-white font-bold')}>
            Too Hot to Handle
          </Text>
          <Text style={t('text-center text-white')}>
            Too Hot to Handle | Season 1 | Official Trailers | Netflix
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Trailers;
