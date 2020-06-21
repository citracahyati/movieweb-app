import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import t from 'tailwind-rn';

function Menukiri() {
  const [movies, setMovies] = useState(false);
  const [tv, setTv] = useState(false);
  const [people, setPeople] = useState(false);

  return (
    <View
      style={[
        t(' h-auto bg-indigo-500 my-3 mx-5'),
        {backgroundColor: '#032541'},
      ]}>
      <View style={t('my-3 mx-5')}>
        {/* MOVIES */}
        <TouchableOpacity onPress={() => setMovies(!movies)}>
          <Text style={t('text-lg text-white font-bold leading-7')}>
            Movies
          </Text>
        </TouchableOpacity>
        {movies && (
          <View>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>
                Top Rated
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>
                Now Playing
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* TV SHOW */}
        <TouchableOpacity onPress={() => setTv(!tv)}>
          <Text style={t('text-lg text-white font-bold leading-7')}>
            TV Shows
          </Text>
        </TouchableOpacity>
        {tv && (
          <View>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>
                Top Rated
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>On TV</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>
                Airing Today
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* PEOPLE */}
        <TouchableOpacity onPress={() => setPeople(!people)}>
          <Text style={t('text-lg text-white font-bold leading-7')}>
            People
          </Text>
        </TouchableOpacity>
        {people && (
          <View>
            <TouchableOpacity>
              <Text style={t('text-md text-gray-200 leading-7')}>
                Popular People
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={t('my-3 mx-5')}>
        {/* ------ */}
        <TouchableOpacity>
          <Text style={t('text-md text-gray-200 leading-7')}>
            Contribution Bible
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-md text-gray-200 leading-7')}>Apps</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {' '}
          <Text style={t('text-md text-gray-200 leading-7')}>Discussion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {' '}
          <Text style={t('text-md text-gray-200 leading-7')}>Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {' '}
          <Text style={t('text-md text-gray-200 leading-7')}>Contribute</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {' '}
          <Text style={t('text-md text-gray-200 leading-7')}>API</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {' '}
          <Text style={t('text-md text-gray-200 leading-7')}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={t('text-md text-gray-200 leading-7')}>About</Text>
        </TouchableOpacity>
      </View>
      <View style={t('my-3 mx-5')}>
        <TouchableOpacity>
          <Text style={t('text-md text-gray-200 leading-10')}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Menukiri;
