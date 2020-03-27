import React, {useEffect, useState} from 'react';
import * as Keychain from 'react-native-keychain';
import {Text, Button} from 'react-native';
import {AppContainer, Space, TextLink} from '../../../components';
import {onScreen} from '../../../constants';

const Home = ({navigation}) => {
  const [error, setError] = useState('');
  useEffect(() => {
    const key = async () => {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          onScreen('USER', navigation)();
        }
      } catch (err) {
        setError(err);
      }
    };
    key();
  });
  return (
    <AppContainer message={error}>
      <Space height={200} />
      <Text style={{textAlign: 'center', fontSize: 25}}>
        Welcome to A Very Simple APP
      </Text>
      {/* <Text style={{ textAlign: 'center', fontSize: 14 }}>Nothing here :(</Text> */}
      <Space height={150} />
      <Button title="Sign In " onPress={onScreen('SIGN_IN', navigation)} />
      {/* <Button title="Sign In" onPress={onScreen('SIGN_IN', navigation)} /> */}
      <TextLink title="or" />
      <Button title="Sign Up" onPress={onScreen('SIGN_UP', navigation)} />
    </AppContainer>
  );
};

export {Home};
