import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {fakeFetch} from '../actions/transaction';
import {withProfiler} from '@sentry/react-native';

const Home = () => {
  useEffect(() => {
    fakeFetch();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default withProfiler(Home);
