import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import t from 'tailwind-rn';
import PercentageCircle from 'react-native-percentage-circle';

const konten = [
  {
    nama: 'samara',
    bg: 'red-400',
    gambar: '',
    nilai1: 1549449,
    nilai2: 9083,
  },
  {
    nama: 'bmorr72',
    bg: 'green-400',
    gambar: '',
    nilai1: 25185,
    nilai2: 7313,
  },
  {
    nama: '000000',
    bg: 'indigo-400',
    gambar: '',
    nilai1: 8969,
    nilai2: 6804,
  },
  {
    nama: 'banana',
    bg: 'yellow-400',
    gambar: 'gambar16.jpg',
    nilai1: 1434018,
    nilai2: 6763,
  },
  {
    nama: 'pricauica',
    bg: 'purple-400',
    gambar: '',
    nilai1: 8357,
    nilai2: 5106,
  },
  {
    nama: 'r.janov',
    bg: 'blue-400',
    gambar: '',
    nilai1: 61327,
    nilai2: 3098,
  },
  {
    nama: 'mikedeth',
    bg: 'red-400',
    gambar: 'gambar17.jpeg',
    nilai1: 169440,
    nilai2: 2790,
  },
  {
    nama: 'hamza behbehani',
    bg: 'gray-400',
    gambar: 'gambar19.jpeg',
    nilai1: 33224,
    nilai2: 2657,
  },
  {
    nama: 'wardenclyffe Tower',
    bg: 'red-400',
    gambar: '',
    nilai1: 1486932,
    nilai2: 2639,
  },
  {
    nama: 'lineker',
    bg: 'orange-400',
    gambar: 'gambar21.jpg',
    nilai1: 130428,
    nilai2: 2453,
  },
];

function Leaderboard() {
  return (
    <View style={t('w-full')}>
      <View style={t('flex-row items-center justify-around py-5')}>
        <Text style={t('font-bold text-xl')}>Leaderboard</Text>
        <View>
          <View style={t('flex-row')}>
            <View style={t('rounded-full p-2 bg-green-500 mr-3 mb-2')} />
            <Text>All Time Edits</Text>
          </View>
          <View style={t('flex-row')}>
            <View style={t('rounded-full p-2 bg-red-500 mr-3')} />
            <Text>Edits This Week</Text>
          </View>
        </View>
      </View>
      <View style={t('w-full px-4')}>
        {konten.map(({nama, gambar, bg, nilai1, nilai2}) => {
          return (
            <View style={t('w-full flex-row my-4 ')}>
              {gambar === '' ? (
                <View
                  style={[
                    t(
                      `rounded-full px-6 bg-${bg} mr-3 justify-center items-center`,
                    ),
                    {height: '3.5rem', width: '3.5rem'},
                  ]}>
                  <Text>{nama.substring(0, 1)}</Text>
                </View>
              ) : (
                <Image
                  style={[
                    t('rounded-full rounded-full mr-3'),
                    {height: '3.5rem', width: '3.5rem'},
                  ]}
                  source={require(`../assets/${gambar}`)}
                />
              )}

              <View style={t('w-full')}>
                <Text style={t('font-bold')}>{nama}</Text>
                <View style={t('flex-row mt-1 items-center')}>
                  <View
                    style={[
                      t('h-3 rounded-full bg-red-500'),
                      {width: `${(nilai1 / 2700000) * 100}%`},
                    ]}
                  />
                  <Text style={t('ml-4 font-bold')}>
                    {nilai1.toLocaleString()}
                  </Text>
                </View>
                <View style={t('w-full flex-row mt-1 items-center')}>
                  <View
                    style={[
                      t('h-3 rounded-full bg-yellow-500'),
                      {width: `${(nilai2 / 14000) * 100}%`},
                    ]}
                  />
                  <Text style={t('ml-4 font-bold')}>
                    {nilai2.toLocaleString()}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      {/* CSS PERSENTASE */}
      <View>
        <View>
          <PercentageCircle
            style={{radius: 35, percent: 50, color: '#3498db'}}
          />
        </View>
        <View>
          <PercentageCircle style={{radius: 35, percent: 50, color: '#3498db'}}>
            <Image style={{width: 20, height: 20}} />
          </PercentageCircle>
        </View>
      </View>
    </View>
  );
}

export default Leaderboard;
