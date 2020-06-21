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

function Home() {
  return (
    <View style={t('')}>
      <ImageBackground
        style={t('h-64 items-center justify-center opacity-75')}
        source={require('../assets/image1.jpg')}>
        <View style={t('justify-center px-4')}>
          <Text style={t('text-4xl font-bold text-white mb-2')}>Welcome.</Text>
          <Text
            style={t('text-xl font-bold text-white text-justify leading-9')}>
            Millions of movies, TV shows and people to discover. Explore now.
          </Text>
        </View>
        <View style={t('w-full flex-row mt-5 justify-center')}>
          <View style={[t('h-10 bg-white rounded-full '), {width: '90%'}]}>
            <Text style={t('text-center text-white')} />
            <TouchableOpacity>
              <View
                style={t(
                  'h-10 w-20 bg-gray-700 text-white rounded-full self-end justify-center items-center',
                )}>
                <Text style={t('font-bold text-white')}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
