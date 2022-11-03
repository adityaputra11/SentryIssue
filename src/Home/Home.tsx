import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {fakeFetch} from '../actions/transaction';
import {withProfiler} from '@sentry/react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    fakeFetch();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="To List Screen"
        onPress={() => {
          navigation.navigate('List');
          console.log('pressed');
        }}
      />
    </View>
  );
};

export default withProfiler(Home);
