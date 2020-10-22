import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import Colors from '../../../specs/Colors';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import {TextWrapper, SmallText, BigText} from '../../atoms/TextAtoms';

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);
  }, []);

  return (
    <NonScrollContainer background={Colors.pastelCoral}>
      <TextWrapper paddingTop="200px" align="center" width="90%">
        <BigText color={Colors.white} marginTop="100px">
          CATCHIO
        </BigText>
      </TextWrapper>
      <TextWrapper align="flex-end" width={Dimensions.get('window').width / 2}>
        <SmallText color={Colors.white}>let them see you</SmallText>
      </TextWrapper>
    </NonScrollContainer>
  );
};

export default WelcomeScreen;
