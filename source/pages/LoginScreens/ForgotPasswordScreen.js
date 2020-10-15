import React from 'react';
import {View, Text} from 'react-native'
import Colors from '../../../specs/Colors'
import Button from '../../atoms/ButtonAtoms'
import { Input } from '../../atoms/InputAtoms';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import { MediumText, SmallText, TextWrapper } from '../../atoms/TextAtoms';

const ForgotPasswordScreen = () => {
    return ( 
        <NonScrollContainer fullHeight={true}>
            <TextWrapper marginTop='40px' >
                <MediumText color={Colors.pastelCoral}> Let's recover your password!</MediumText>
                <SmallText color={Colors.mediumGray} marginTop='10px'> Please enter your email address below</SmallText>
            </TextWrapper>
            <Input marginTop="40px" placeholder="Username"/>
            <Input placeholder="Email" marginTop='5px'/>
            <Button title="Submit" width="80%" color={Colors.pastelCoral} marginTop='20px'/>
        </NonScrollContainer>
     );
}

export const screenOptions = navData => {
    return {
        headerTitle: 'Forgot Password',
        headerTintColor: Colors.pastelCoral,   
    }
}
 
export default ForgotPasswordScreen;