import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BigText, SmallText, TextWrapper } from '../atoms/TextAtoms';
import {Input} from '../atoms/InputAtoms'
import Button from '../atoms/ButtonAtoms'
import NonScrollContainer from '../atoms/NonScrollContainer'


const LoginScreen = ({callback}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return ( 
        <SafeAreaView>
        <NonScrollContainer>
            <TextWrapper padding={0} align='center' width={90}>
            <BigText marginTop={100}>CATCHIO</BigText>
            </TextWrapper>
            <TextWrapper padding={0} align='flex-end' width={50}>
            <SmallText gray={false}>let them see you</SmallText>
            </TextWrapper>
          
            <TextWrapper padding={30} align='flex-end' width={100}>
                <BigText marginTop={100} gray={true}>DISCOUNTS</BigText>
                <BigText gray={true}>JUST FOR YOU</BigText>
            </TextWrapper>
            <Input marginTop={40} value={username} onChangeText={input => setUsername(input)}/>
            <Input marginTop={10} secureTextEntry={true} value={password} onChangeText={input => setPassword(input)}/>
            <Button width={80} marginTop={10} title='SIGN IN' onPress={callback}/>
        <TextWrapper marginTop={20} >
            <SmallText gray={true}>Forgot your password? </SmallText>
        </TextWrapper>
        <TextWrapper marginTop={70}>
            <SmallText gray={true}>Don't have an account?<SmallText gray={false}> Create one!</SmallText></SmallText>
        </TextWrapper>
        </NonScrollContainer>
        </SafeAreaView>
     );
}
 
export default LoginScreen;