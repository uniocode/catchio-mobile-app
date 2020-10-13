import React from 'react';
import styled from 'styled-components'
import {TouchableOpacity} from 'react-native'
import Colors from '../../specs/Colors'

const Wrapper = styled.View`
width: ${props => props.width}%;
height: 50px;
background: ${Colors.pastelCoral};
margin-top: ${props => props.marginTop? props.marginTop : 0}px;
border-radius: 200px;
align-items: center;
justify-content: center;
`

const Text = styled.Text`
color: white;
font-weight: 800;
text-transform: uppercase;

`

const Button = ({title, width, marginTop, onPress}) => {
  
    return ( 
        <TouchableOpacity style={{width:'100%', alignItems: 'center'}} onPress={onPress}>
            <Wrapper marginTop={marginTop} width={width}>
                <Text>{title}</Text>
            </Wrapper>
        </TouchableOpacity>
     );
}
 
export default Button;