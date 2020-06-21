import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import t from 'tailwind-rn';

const konten2 = [1, 2, 3, 4];

function Trending() {
  return (
    <View>
      <View style={t('items-center flex-row justify-around mt-5')}>
        <Text style={t('text-xl')}>Trending</Text>
        <TouchableOpacity>
          <View
            style={t(
              'justify-center h-8 w-32 bg-gray-600 text-white font-bold rounded-full',
            )}>
            <Text style={t('text-sm text-center')}>Today</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}>
        {konten2.map(data => {
          return (
            <View style={t('mt-5 mx-4')}>
              <TouchableOpacity>
                <View style={t('rounded-lg')}>
                  <ImageBackground
                    style={t('h-56 w-32')}
                    source={require('../assets/gambar7.jpg')}>
                    <Image
                      style={t('h-5 w-5 rounded-lg self-end mt-2 mr-2')}
                      source={require('../assets/tombol3.png')}
                    />
                  </ImageBackground>
                  <Image
                    style={t('h-8 w-8 rounded-lg self-start -m-4 ml-2')}
                    source={require('../assets/tombol3.png')}
                  />
                </View>
              </TouchableOpacity>
              <View style={t('mt-5')}>
                <Text style={t('text-xs font-bold leading-3')}>Family guy</Text>
                <Text style={t('text-xs text-gray-600 mt-1')}>
                  Jan 31, 1991
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Trending;
