import React, {memo, useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import {GREEN} from '../../constants';

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    fontSize: 30,
  },
});

const Button = memo(({title, onPress}) => {
  const [bg, setBg] = useState(GREEN);
  const {img} = styles;
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setBg(GREEN)}
      onPressOut={() => setBg(GREEN)}>
      <Text style={[img, {color: bg}]}>{title}</Text>
    </TouchableWithoutFeedback>
  );
});

export {Button};
