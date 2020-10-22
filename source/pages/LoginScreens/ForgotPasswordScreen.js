import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Colors from '../../../specs/Colors';
import Button from '../../atoms/ButtonAtoms';
import {FormWrapper, Input} from '../../atoms/InputAtoms';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import {MediumText, SmallText, TextWrapper} from '../../atoms/TextAtoms';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();
  const [success, setSuccess] = useState(false);

  const passwordResetHandler = () => {
    if (email === '') {
      setMessage('Please, write your email into the input field.');
      setError(true);
    } else {
      // Check with Axios if such email exists in the database, if so, set success true, if no, set error true and give an error message
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [error]);

  return (
    <NonScrollContainer>
      <TextWrapper marginTop="40px">
        <MediumText color={Colors.pastelCoral}>
          Let's recover your password!
        </MediumText>
      </TextWrapper>
      {success && (
        <TextWrapper marginTop="50px">
          <SmallText color={Colors.pastelGreen}>
            Your request is recieved.
          </SmallText>
          <SmallText color={Colors.pastelGreen}>
            Please, check your email.
          </SmallText>
        </TextWrapper>
      )}
      {!success && (
        <>
          <TextWrapper>
            <SmallText color={Colors.mediumGray} marginTop="10px">
              Please enter your email address below
            </SmallText>
          </TextWrapper>
          <FormWrapper marginTop="50px">
            {error ? (
              <SmallText
                color={Colors.pastelRed}
                position="absolute"
                top="-30px">
                {message}
              </SmallText>
            ) : null}
            <Input
              placeholder="Email"
              marginTop="5px"
              onChangeText={(input) => setEmail(input)}
              error={error ? true : false}
            />
          </FormWrapper>
          <Button
            round={true}
            title="Submit"
            width="80%"
            color={Colors.pastelCoral}
            marginTop="20px"
            callback={passwordResetHandler}
          />
        </>
      )}
    </NonScrollContainer>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Forgot Password',
    headerTintColor: Colors.pastelCoral,
  };
};

export default ForgotPasswordScreen;
