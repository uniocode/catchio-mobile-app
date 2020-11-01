import React, {useEffect, useState} from 'react';

import Axios from 'axios';
import {TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import {SmallText, MediumText, TextWrapper} from '../../atoms/TextAtoms';
import Colors from '../../../specs/Colors';
import {FormWrapper, Input} from '../../atoms/InputAtoms';
import Button from '../../atoms/ButtonAtoms';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const SignUpScreen = ({navigation}) => {
  const [state, setState] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hash, setHash] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const getInfoFromToken = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, nme, first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          setState(result);
          console.log(result);
        }
      },
    );
    new GraphRequestManager.addRequest(profileRequest).start();
  };

  const signUpHandler = async () => {
    if (password != confirmPassword) {
      setMessage("Your passwords don't match.");
      setError(true);
    } else {
      try {
        const response = await Axios.post(
          'https://bedfb75978eb.ngrok.io/register',
          {
            user: {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: hash,
            },
          },
        );
        console.log(response.data);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
        setMessage('');
      }, 2000);
    }
  }, [error]);

  return (
    <NonScrollContainer>
      <TextWrapper marginTop="30px">
        <MediumText color={Colors.pastelCoral}>Welcome to Catchio!</MediumText>
        <SmallText color={Colors.mediumGray} marginTop="10px">
          Let's create an account
        </SmallText>
      </TextWrapper>
      <KeyboardAvoidingView>
        <FormWrapper marginTop="50px">
          {error ? (
            <SmallText color={Colors.pastelRed} position="absolute" top="-30px">
              {message}
            </SmallText>
          ) : null}
          <Input
            placeholder="First Name"
            onChangeText={(input) => setFirstName(input)}
            required
            returnKeyType="next"
          />
          <Input
            marginTop="10px"
            placeholder="Last Name"
            onChangeText={(input) => setLastName(input)}
            required
            returnKeyType="next"
          />
          <Input
            marginTop="10px"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(input) => setEmail(input)}
            required
            returnKeyType="next"
          />
          <Input
            marginTop="10px"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(input) => setPassword(input)}
            error={error ? true : false}
            autoCapitalize="none"
            required
            returnKeyType="next"
          />
          <Input
            marginTop="10px"
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(input) => setConfirmPassword(input)}
            error={error ? true : false}
            autoCapitalize="none"
            required
            returnKeyType="done"
            onSubmitEditing={signUpHandler}
          />
        </FormWrapper>
      </KeyboardAvoidingView>
      <Button
        round={true}
        title="Create Account"
        color={Colors.pastelCoral}
        width="80%"
        marginTop="10px"
        callback={signUpHandler}
      />
      <TextWrapper>
        <SmallText marginTop="30px" color={Colors.mediumGray}>
          Or sign up with:
        </SmallText>
        <Button
          round={true}
          title="Google"
          color="#4c8bf5"
          width="80%"
          marginTop="20px"
        />
        <Button
          round={true}
          title="Facebook"
          color="#3b5998"
          width="80%"
          marginTop="10px"
        />
      </TextWrapper>
      <TextWrapper marginTop="40px">
        <SmallText color={Colors.mediumGray}>
          Already have an account?
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <SmallText color={Colors.pastelCoral}> Log in!</SmallText>
          </TouchableOpacity>
        </SmallText>
      </TextWrapper>
    </NonScrollContainer>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Create Account',
    headerTintColor: Colors.pastelCoral,
  };
};

export default SignUpScreen;
