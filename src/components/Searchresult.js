import React from 'react';
import {Text, View} from 'react-native';
import t from 'tailwind-rn';

function Searchresult() {
  return (
    <View>
      <View style={t('')}>
        <View style={t('h-10 w-full bg-gray-500 justify-center')}>
          <Text style={t('font-italic mx-2')}>Text input</Text>
        </View>
      </View>
      <View style={t('h-10 w-full bg-blue-500 justify-center')}>
        <Text style={t('font-bold text-white text-lg mx-2')}>
          Search Results
        </Text>
      </View>
      <View style={t('flex-row justify-around mt-5')}>
        <View style={t('flex-row items-center')}>
          <Text style={t('mx-2 text-blue-500')}>Movies</Text>
          <View
            style={t(
              'h-6 w-6 border border-blue-500 justify-center rounded-lg',
            )}>
            <Text style={t('text-center')}>1</Text>
          </View>
        </View>
        <View style={t('flex-row items-center')}>
          <Text style={t('mx-2')}>TV Shows</Text>
          <View
            style={t(
              'h-6 w-6 border border-gray-500 justify-center rounded-lg',
            )}>
            <Text style={t('text-center')}>0</Text>
          </View>
        </View>
        <View style={t('flex-row items-center')}>
          <Text style={t('mx-2')}>People</Text>
          <View
            style={t(
              'h-6 w-6 border border-gray-500 justify-center rounded-lg',
            )}>
            <Text style={t('text-center')}>0</Text>
          </View>
        </View>
      </View>
      <View style={t('h-1 my-3 w-full bg-gray-300 ')} />
      <View
        style={[
          t('h-56 w-64 border border-gray-500 self-center '),
          {boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'},
        ]}
      />
    </View>
  );
}

export default Searchresult;
