import React from 'react';
import {TouchableOpacity} from 'react-native'
import NonScrollContainer from '../atoms/NonScrollContainer';
import { SmallText, BigText, MediumText, TextWrapper } from '../atoms/TextAtoms';
import Colors from '../../specs/Colors'
import { Input } from '../atoms/InputAtoms';
import Button, { ButtonWrapper } from '../atoms/ButtonAtoms';

const SignUpScreen = ({navigation}) => {
    return ( 
        <NonScrollContainer fullHeight={true}>
            <TextWrapper  marginTop='40px'>
                <MediumText color={Colors.pastelCoral}>Welcome to Catchio!</MediumText>
                <SmallText color={Colors.mediumGray} marginTop='10px'>Let's create an account</SmallText>
            </TextWrapper>
            <Input marginTop='30px' placeholder="Full Name"/>
            <Input marginTop='10px' placeholder="Email"/>
            <Input marginTop='10px' placeholder="Celular" keyboardType={'numeric'}/>
            <Input marginTop='10px' placeholder="Password" secureTextEntry={true}/>
            <Input marginTop='10px' placeholder="Confirm Password" secureTextEntry={true}/>
            <Button title="Create Account" color={Colors.pastelCoral} width="80%" marginTop='10px'/>
            <TextWrapper>
                <SmallText marginTop='30px' color={Colors.mediumGray}>Or sign up with:</SmallText>
                <Button title="Google" color='#4c8bf5' width="80%" marginTop="20px"/>
                <Button title="Facebook" color='#3b5998'  width="80%" marginTop="10px"/>
            </TextWrapper>
            <TextWrapper marginTop='40px'>
            <SmallText color={Colors.mediumGray}>Already have an account?<TouchableOpacity onPress={() => navigation.navigate("Login")}><SmallText color={Colors.pastelCoral}> Log in!</SmallText></TouchableOpacity></SmallText>
            </TextWrapper>

        </NonScrollContainer>
     );
}
 
export default SignUpScreen;