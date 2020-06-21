import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import t from 'tailwind-rn';

function Login() {
  return (
    <View style={t('h-auto')}>
      <View style={t('my-4 mx-6')}>
        <Text style={t('text-xl font-bold')}>Login to your account</Text>
        <Text style={t('text-sm leading-5 text-justify mt-1')}>
          In order to use the editing and rating capabilities of TMDb, as well
          as get personal recommendations you will need to login to your
          account. If you do not have an account, registering for an account is
          free and simple. Click here to get started.
        </Text>
        <Text style={t('text-sm leading-5 text-justify mt-3')}>
          If you signed up but didn't get your verification email, click here to
          have it resent.
        </Text>
      </View>
      <View style={t('my-3 mx-6')}>
        <Text>Username</Text>
        <View style={t('h-10 mt-2 w-auto border border-gray-500')}>
          <TextInput style={t('p-2 w-full h-full')} />
        </View>
      </View>
      <View style={t('my-3 mx-6')}>
        <Text>Password</Text>
        <View style={t('h-10 mt-2 w-auto  border border-gray-500 ')}>
          <TextInput style={t('p-2 w-full h-full')} />
        </View>
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
            <Text style={t('text-blue-800')}>Reset password</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
