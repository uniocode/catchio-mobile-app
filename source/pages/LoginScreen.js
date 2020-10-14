import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../specs/Colors'
import { BigText, SmallText, TextWrapper } from '../atoms/TextAtoms';
import {Input} from '../atoms/InputAtoms'
import Button from '../atoms/ButtonAtoms'
import NonScrollContainer from '../atoms/NonScrollContainer'
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return ( 
      
        <NonScrollContainer fullHeight={true}>
            <TextWrapper padding={0} align='center' width={90}>
            <BigText color={Colors.pastelCoral} marginTop={100}>CATCHIO</BigText>
            </TextWrapper>
            <TextWrapper padding={0} align='flex-end' width={50}>
            <SmallText color={Colors.pastelCoral}>let them see you</SmallText>
            </TextWrapper>
          
            <TextWrapper padding={30} align='flex-end' width={100}>
                <BigText marginTop={100} color={Colors.mediumGray}>DISCOUNTS</BigText>
                <BigText color={Colors.mediumGray}>JUST FOR YOU</BigText>
            </TextWrapper>
            <Input marginTop='40px' value={username} onChangeText={input => setUsername(input)}/>
            <Input marginTop='10px' secureTextEntry={true} value={password} onChangeText={input => setPassword(input)}/>
            <Button width='80%' marginTop='10px' color={Colors.pastelCoral} title='SIGN IN' onPress={() => navigation.navigate("Main Stack")}/>
        <TextWrapper marginTop={20} >
            <TouchableOpacity onPress={() => navigation.navigate("Forgot Password")}><SmallText color={Colors.mediumGray}>Forgot your password? </SmallText></TouchableOpacity>
        </TextWrapper>
        <TextWrapper marginTop='70px'>
            <SmallText color={Colors.mediumGray}>Don't have an account?<TouchableOpacity onPress={() => navigation.navigate("Sign Up")}><SmallText color={Colors.pastelCoral}> Create one!</SmallText></TouchableOpacity></SmallText>
        </TextWrapper>
        </NonScrollContainer>
       
     );
}
 
export default LoginScreen;