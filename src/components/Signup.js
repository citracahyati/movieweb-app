import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import t from 'tailwind-rn';

function Signup() {
  return (
    <View style={t('h-auto')}>
      <View style={t('my-4 mx-6')}>
        <Text style={t('text-xl font-bold')}>Sign up for an account</Text>
        <Text style={t('text-sm leading-5 text-justify mt-1')}>
          Signing up for an account is free and easy. Fill out the form below to
          get started. JavaScript is required to to continue.
        </Text>
      </View>
      <View style={t('my-3 mx-6')}>
        <Text>Username</Text>
        <View style={t('h-10 mt-2 w-auto border border-gray-500')}>
          <TextInput style={t('p-2 w-full h-full')} />
        </View>
      </View>
      <View style={t('my-3 mx-6')}>
        <Text>Password (4 characters minimum)</Text>
        <View style={t('h-10 mt-2 w-auto border border-gray-500')}>
          <TextInput style={t('p-2 w-full h-full')} />
        </View>
      </View>
      <View style={t('my-3 mx-6')}>
        <Text>Password Confirm</Text>
        <View style={t('h-10 mt-2 w-auto border border-gray-500')}>
          <TextInput style={t('p-2 w-full h-full')} />
        </View>
      </View>
      <View style={t('my-3 mx-6')}>
        <Text>Email</Text>
        <View style={t('h-10 mt-2 w-auto border border-gray-500')}>
          <TextInput style={t('p-2 w-full h-full')} />
        </View>
      </View>
      <View style={t('my-3 mx-6')}>
        <Text style={t('text-sm leading-5 text-justify mt-1')}>
          By clicking the "Sign up" button below, I certify that I have read and
          agree to the TMDb terms of use and privacy policy.
        </Text>
      </View>
      <View style={t('flex-row items-center')}>
        <TouchableOpacity>
          <View
            style={t(
              'h-10 w-20 mx-6 my-3 bg-blue-500 text-white justify-center items-center rounded-lg',
            )}>
            <Text style={t('font-bold text-white text-md')}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={t('')}>
            <Text style={t('text-blue-800')}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={[
          t('h-48 bg-white mx-3 my-3 rounded-2xl'),
          {boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'},
        ]}>
        <View style={t('my-3 mx-3')}>
          <Text style={t('text-lg my-2')}>Benefits of being a member</Text>
          <View style={t('flex-row items-center')}>
            <View style={t('rounded-full p-1 bg-black mr-3 mb-2')} />
            <Text style={t('leading-4')}>
              Log the movies and TV shows you have watched
            </Text>
          </View>
          <View style={t('flex-row items-center')}>
            <View style={t('rounded-full p-1 bg-black mr-3 mb-2')} />
            <Text style={t('leading-4')}>
              Keep track of your favourite movies and TV shows{' '}
            </Text>
          </View>
          <View style={t('flex-row items-center')}>
            <View style={t('rounded-full p-1 bg-black mr-3 mb-2')} />
            <Text style={t('leading-4')}>
              Build and maintain a personal watchlist
            </Text>
          </View>
          <View style={t('flex-row items-center')}>
            <View style={t('rounded-full p-1 bg-black mr-3 mb-2')} />
            <Text style={t('leading-4')}>
              Build custom mixed lists (movies and TV)
            </Text>
          </View>
          <View style={t('flex-row items-center')}>
            <View style={t('rounded-full p-1 bg-black mr-3 mb-2')} />
            <Text style={t('leading-4')}>
              Take part in movie and TV discussions
            </Text>
          </View>
          <View style={t('flex-row items-center')}>
            <View style={t('rounded-full p-1 bg-black mr-3 mb-2')} />
            <Text style={t('leading-4')}>
              Contribute to, and improve the information in our database
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Signup;
