import React from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-spinkit';
import {BLUE} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
    backgroundColor: 'transparent',
  },
});

const Loading = () => (
  <View style={styles.container}>
    <Spinner size={45} type="CircleFlip" color={BLUE} />
  </View>
);

export {Loading};
