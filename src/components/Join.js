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

function Join() {
  return (
    <ImageBackground
      style={t('h-auto items-center justify-center mt-5 py-5 px-5')}
      source={require('../assets/image3.jpg')}>
      <View style={t('')}>
        <View style={t('my-5')}>
          <Text style={t('text-2xl font-bold text-white mb-5')}>
            Join Today
          </Text>
          <Text style={t('text-md leading-6 text-justify text-white')}>
            Get access to maintain your own custom personal lists, track what
            you've seen and search and filter for what to watch next—regardless
            if it's in theatres, on TV or available on popular streaming
            services like Netflix, Amazon Prime Video, and iflix.
          </Text>
        </View>
        <TouchableOpacity>
          <View style={t('h-10 w-24 bg-purple-700 rounded-lg justify-center')}>
            <Text style={t('text-md font-bold text-white text-center')}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
        <View style={t('my-5')}>
          <Text style={t('leading-6 text-white')}>
            Enjoy TMDb and free Maintain a personal watchlist Filter by your
            subscribed streaming services and find something to watch Log the
            movies and TV shows you've seen Build custom lists Contribute to and
            improve our database
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Join;
