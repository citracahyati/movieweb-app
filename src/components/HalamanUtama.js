import React from 'react';
import {ScrollView, View} from 'react-native';
import Home from './Home';
import Header from './Header';
import Trailers from './Trailers';
import Join from './Join';
import Leaderboard from './Leaderboard';
import Footer from './Footer';
import t from 'tailwind-rn';
import Searchresult from './Searchresult';
import List, {popular, freetowatch, trending} from './List';

function HalamanUtama() {
  return (
    <View style={t('w-full flex-cols')}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Home />
        <List judul={"What's Popular"} tombol={'Streaming'} data={popular} />
        <List judul={'Free To Watch'} tombol={'Movies'} data={freetowatch} />
        <Trailers />
        <List judul={'Trending'} tombol={'Today'} data={trending} />
        <Join /> */}
        <Leaderboard />
        <Footer />
        <Searchresult />
      </ScrollView>
    </View>
  );
}

export default HalamanUtama;
