import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import t from 'tailwind-rn';

const konten = [
  {
    gambar: 'gambar1.jpg',
    judul: 'Defending Jacob',
    persen: '83%',
    tanggal: 'Apr 24 2020',
  },
  {
    gambar: 'gambar2.jpg',
    judul: 'Defending Jacob',
    persen: '83%',
    tanggal: 'Apr 24, 2020',
  },
  {
    gambar: 'gambar3.jpg',
    judul: 'The Flash',
    persen: '72%',
    tanggal: 'Oct 07, 2014',
  },
  {
    gambar: 'gambar4.jpg',
    judul: 'Once Upon a Time Hollywood',
    persen: '75%',
    tanggal: 'Jul 25, 2019',
  },
  {
    gambar: 'gambar5.jpg',
    judul: 'Spider-Man: Far From Home',
    persen: '75%',
    tanggal: 'Jun 28, 2019',
  },
  {
    gambar: 'gambar6.jpg',
    judul: 'Greys Anatomy',
    persen: '73%',
    tanggal: 'Mar 07, 2005',
  },
  {
    gambar: 'gambar7.jpg',
    judul: 'Intersellar',
    persen: '83%',
    tanggal: 'Nov 05, 2014',
  },
  {
    gambar: 'gambar8.jpg',
    judul: 'Thieves of The Wood',
    persen: '57%',
    tanggal: 'Jan 02, 2020',
  },
  {
    gambar: 'gambar9.jpg',
    judul: 'Gone Girl',
    persen: '79%',
    tanggal: 'Oct 01, 2014',
  },
];

function Popular() {
  return (
    <View>
      <View style={t('items-center flex-row justify-around mt-5')}>
        <Text style={t('text-xl')}>What's Popular</Text>
        <TouchableOpacity>
          <View
            style={t(
              'justify-center h-8 w-32 bg-gray-600 text-white font-bold rounded-full',
            )}>
            <Text style={t('text-sm text-center')}>Streaming</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}>
        {konten.map(({gambar, judul, persen, tanggal}) => {
          return (
            <View style={t('mt-5 mx-4 rounded-2xl')}>
              <TouchableOpacity>
                <ImageBackground
                  style={t('h-56 w-32')}
                  source={require(`../assets/${gambar}`)}>
                  <Image
                    style={t('h-5 w-5 self-end mt-2 mr-2')}
                    source={require('../assets/tombol3.png')}
                  />
                </ImageBackground>
              </TouchableOpacity>
              <View
                style={t(
                  'h-8 w-8 rounded-full justify-center items-center bg-gray-200',
                )}>
                <Text>{persen}</Text>
              </View>
              <View style={t('mt-5')}>
                <Text style={t('text-xs font-bold leading-3')}>{judul}</Text>
                <Text style={t('text-xs text-gray-600 mt-1')}>{tanggal}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Popular;
