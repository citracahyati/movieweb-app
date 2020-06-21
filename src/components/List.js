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

function List({judul, tombol, data}) {
  return (
    <View>
      <View style={t('items-center flex-row justify-around mt-5')}>
        <Text style={t('text-xl')}>{judul}</Text>
        <TouchableOpacity>
          <View style={t('justify-center h-8 w-32 bg-gray-600 rounded-full')}>
            <Text style={t('text-sm text-center text-white font-bold')}>
              {tombol}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data &&
          data.map(({gambar, judul, persen, tanggal}) => {
            return (
              <View style={t('w-32 mt-8 mx-4 rounded-2xl')}>
                <TouchableOpacity>
                  <ImageBackground
                    style={t('h-56 w-32 rounded-full -m-3')}
                    imageStyle={t('rounded-md')}
                    source={require(`../assets/${gambar}`)}>
                    <Image
                      style={t('h-5 w-5 self-end mt-2 mr-2')}
                      source={require('../assets/tombol3.png')}
                    />
                  </ImageBackground>
                </TouchableOpacity>
                <View
                  style={[
                    t('h-8 w-8 rounded-full justify-center items-center'),
                    {backgroundColor: '#081C22'},
                  ]}>
                  <View style={t('flex-row ')}>
                    <Text style={t('text-white text-xs')}>{persen}</Text>
                    <Text style={[t('text-white'), {fontSize: 6}]}>%</Text>
                  </View>
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

export default List;

export const popular = [
  {
    gambar: 'gambar1.jpg',
    judul: 'Defending Jacob',
    persen: 83,
    tanggal: 'Apr 24 2020',
  },
  {
    gambar: 'gambar2.jpg',
    judul: 'Defending Jacob',
    persen: 83,
    tanggal: 'Apr 24, 2020',
  },
  {
    gambar: 'gambar3.jpg',
    judul: 'The Flash',
    persen: 72,
    tanggal: 'Oct 07, 2014',
  },
  {
    gambar: 'gambar4.jpg',
    judul: 'Once Upon a Time Hollywood',
    persen: 75,
    tanggal: 'Jul 25, 2019',
  },
  {
    gambar: 'gambar5.jpg',
    judul: 'Spider-Man: Far From Home',
    persen: 75,
    tanggal: 'Jun 28, 2019',
  },
  {
    gambar: 'gambar6.jpg',
    judul: 'Greys Anatomy',
    persen: 73,
    tanggal: 'Mar 07, 2005',
  },
  {
    gambar: 'gambar7.jpg',
    judul: 'Intersellar',
    persen: 83,
    tanggal: 'Nov 05, 2014',
  },
  {
    gambar: 'gambar8.jpg',
    judul: 'Thieves of The Wood',
    persen: 57,
    tanggal: 'Jan 02, 2020',
  },
  {
    gambar: 'gambar9.jpg',
    judul: 'Gone Girl',
    persen: 79,
    tanggal: 'Oct 01, 2014',
  },
];

export const freetowatch = [
  {
    gambar: 'gambar1.jpg',
    judul: 'Defending Jacob',
    persen: 83,
    tanggal: 'Apr 24 2020',
  },
  {
    gambar: 'gambar3.jpg',
    judul: 'Desending Jacob',
    persen: 70,
    tanggal: 'Apr 24 2020',
  },
  {
    gambar: 'gambar10.jpg',
    judul: 'Desending Jacob',
    persen: 60,
    tanggal: 'Apr 24 2020',
  },

  {
    gambar: 'gambar2.jpg',
    judul: 'Jun 28, 2019ar From Home',
    persen: 75,
    tanggal: 'Apr 24 2020',
  },
  {
    gambar: 'gambar11.jpg',
    judul: 'The Boy',
    persen: 65,
    tanggal: 'Jan 22, 2016',
  },
  {
    gambar: 'gambar12.jpg',
    judul: 'Dream House',
    persen: 80,
    tanggal: 'Jan 30, 2011',
  },
  {
    gambar: 'gambar13.jpg',
    judul: 'Her',
    persen: 79,
    tanggal: 'Dec 18, 2013',
  },
];

export const trending = [
  {
    gambar: 'gambar2.jpg',
    judul: 'Greys Anatomy',
    persen: 73,
    tanggal: 'Mar 07, 2005',
  },
  {
    gambar: 'gambar2.jpg',
    judul: 'Nov 05, 2014',
    persen: 73,
    tanggal: 'Mar 07, 2005',
  },
  {
    gambar: 'gambar8.jpg',
    judul: 'Thieves9of The Wood',
    persen: 79,
    tanggal: 'Oct 01, 2014',
  },

  {
    gambar: 'gambar10.jpg',
    judul: 'Gangster the Cop the Devil',
    persen: 70,
    tanggal: 'May 15, 2019',
  },
];
