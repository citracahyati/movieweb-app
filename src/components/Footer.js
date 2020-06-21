import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import t from 'tailwind-rn';

function Footer() {
  return (
    <View style={[t('h-auto'), {backgroundColor: '#032541'}]}>
      <TouchableOpacity>
        <View
          style={t('h-10 w-48 bg-white rounded-lg justify-center my-5 mx-5')}>
          <Text style={t('text-md font-bold text-gray-800 text-center')}>
            JOIN THE COMMUNITY
          </Text>
        </View>
      </TouchableOpacity>
      <View style={t('px-5 py-3')}>
        <TouchableOpacity>
          <Text style={t('text-lg text-white font-bold leading-6')}>
            THE BASICS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white  leading-6')}>About TMDb</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white  leading-6')}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white  leading-6')}>Support Forum</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white  leading-6')}>API</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white  leading-6')}>System Status</Text>
        </TouchableOpacity>
      </View>
      <View style={t('px-5 py-3')}>
        <TouchableOpacity>
          <Text style={t('text-lg text-white  font-bold leading-6')}>
            GET INVOLVED
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>
            Contribution Bible
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>
            3rd Party Application
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>Add New Movie</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>Add New TV Show</Text>
        </TouchableOpacity>
      </View>
      <View style={t('px-5 py-3')}>
        <TouchableOpacity>
          <Text style={t('text-lg text-white font-bold leading-6')}>
            COMMUNITY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>Guidelines</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>Discussion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>Leader Board</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>Twitter</Text>
        </TouchableOpacity>
      </View>
      <View style={t('px-5 py-3')}>
        <TouchableOpacity>
          <Text style={t('text-lg text-white font-bold leading-6')}>LEGAL</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>Term Of Use</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-sm text-white leading-6')}>API Term Of Use</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Footer;
