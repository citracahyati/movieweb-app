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

const konten1 = [1, 2, 3, 4];

function Freetowach() {
  return (
    <View>
      <View style={t('items-center flex-row justify-around mt-12')}>
        <Text style={t('text-xl')}>Free To Watch</Text>
        <TouchableOpacity>
          <View
            style={t(
              'justify-center h-8 w-32 bg-gray-600 text-white font-bold rounded-full',
            )}>
            <Text style={t('text-sm text-center')}>Movies</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}>
        {konten1.map(data => {
          return (
            <View style={t('mt-5 mx-4 rounded-2xl')}>
              <TouchableOpacity>
                <ImageBackground
                  style={t('h-56 w-32')}
                  source={require('../assets/gambar9.jpg')}>
                  <Image
                    style={t('h-5 w-5 self-end mt-2 mr-2')}
                    source={require('../assets/tombol3.png')}
                  />
                </ImageBackground>
              </TouchableOpacity>
              <Image
                style={t('h-8 w-8 self-start -m-4 ml-2 ')}
                source={require('../assets/tombol3.png')}
              />
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

export default Freetowach;
