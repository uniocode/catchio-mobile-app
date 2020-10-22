import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {TouchableOpacity} from 'react-native';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import {SmallText, MediumText, TextWrapper} from '../../atoms/TextAtoms';
import Colors from '../../../specs/Colors';
import {FormWrapper, Input} from '../../atoms/InputAtoms';
import Button from '../../atoms/ButtonAtoms';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [cellPhone, setCellPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const signUpHandler = async () => {
    if (password != confirmPassword) {
      setMessage("Your passwords don't match.");
      setError(true);
    } else {
      try {
        const response = await Axios.post(
          'https://73fb9896e69f.ngrok.io/register',
          {
            username: username,
            email: email,
            cellPhone: cellPhone,
            password: password,
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
      <FormWrapper marginTop="50px">
        {error ? (
          <SmallText color={Colors.pastelRed} position="absolute" top="-30px">
            {message}
          </SmallText>
        ) : null}
        <Input
          placeholder="Full Name"
          onChangeText={(input) => setUsername(input)}
        />
        <Input
          marginTop="10px"
          placeholder="Email"
          onChangeText={(input) => setEmail(input)}
        />
        <Input
          marginTop="10px"
          placeholder="Celular"
          keyboardType={'numeric'}
          onChangeText={(input) => setCellPhone(input)}
        />
        <Input
          marginTop="10px"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(input) => setPassword(input)}
          error={error ? true : false}
        />
        <Input
          marginTop="10px"
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(input) => setConfirmPassword(input)}
              error={error ? true : false}
        />
      </FormWrapper>
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
