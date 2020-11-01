import React, {useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import Colors from '../../../specs/Colors';
import {BigText, SmallText, TextWrapper} from '../../atoms/TextAtoms';
import {FormWrapper, Input} from '../../atoms/InputAtoms';
import Button from '../../atoms/ButtonAtoms';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LOG_IN} from '../../../store/action';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const login = useSelector((store) => store.mainReducer.loggedIn);
  const dispatch = useDispatch();

  const loginHandler = () => {
    if (username === '' || password === '') {
      setErrorText('Please, fill all the necessary inputs.');
      setError(true);
    } else {
      // Check if such a username and password exists, if so, activate login in store.
      dispatch({type: LOG_IN});
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [error]);

  return (
    <NonScrollContainer>
      <TextWrapper paddingTop="10px" align="center" width="90%">
        <BigText color={Colors.pastelCoral} marginTop="100px">
          CATCHIO
        </BigText>
      </TextWrapper>
      <TextWrapper align="flex-end" width="50%">
        <SmallText color={Colors.pastelCoral}>let them see you</SmallText>
      </TextWrapper>

      <TextWrapper paddingRight="30px" align="flex-end" width="100%">
        <BigText marginTop="100px" color={Colors.mediumGray}>
          DISCOUNTS
        </BigText>
        <BigText color={Colors.mediumGray}>JUST FOR YOU</BigText>
      </TextWrapper>

      <KeyboardAvoidingView behavior="padding">
        <FormWrapper marginTop="90px" position="relative">
          {error && (
            <SmallText color={Colors.pastelRed} position="absolute" top="-30px">
              {errorText}
            </SmallText>
          )}
          <Input
            value={username}
            onChangeText={(input) => setUsername(input)}
            autoFocus={true}
            error={error ? true : false}
            placeholder="Username"
            autoCorrect={false}
          />
          <Input
            marginTop="10px"
            secureTextEntry={true}
            value={password}
            onChangeText={(input) => setPassword(input)}
            error={error ? true : false}
            placeholder="Password"
          />
        </FormWrapper>
      </KeyboardAvoidingView>
      <Button
        width="80%"
        marginTop="10px"
        color={Colors.pastelCoral}
        round={true}
        title="SIGN IN"
        callback={loginHandler}
      />
      <TextWrapper marginTop="20px">
        <TouchableOpacity
          onPress={() => navigation.navigate('Forgot Password')}>
          <SmallText color={Colors.mediumGray}>
            Forgot your password?{' '}
          </SmallText>
        </TouchableOpacity>
      </TextWrapper>
      <TextWrapper marginTop="90px">
        <SmallText color={Colors.mediumGray}>
          Don't have an account?
          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <SmallText color={Colors.pastelCoral}> Create one!</SmallText>
          </TouchableOpacity>
        </SmallText>
      </TextWrapper>
    </NonScrollContainer>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};

export default LoginScreen;
