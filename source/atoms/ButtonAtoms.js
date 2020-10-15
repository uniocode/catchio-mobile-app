import React from 'react';
import styled from 'styled-components'
import {TouchableOpacity} from 'react-native'
import Colors from '../../specs/Colors'

const ButtonWrapper = styled.View`
width: ${props => props.width ? props.width : `0px`};
height: ${props => props.height ? props.height : `50px`};
background: ${props => props.color ? props.color : Colors.mediumGray}
margin-top: ${props => props.marginTop ? props.marginTop : `0px`};
border-radius: 200px;
flex-direction: ${props => props.row ? 'row' : 'column'}
align-items: ${props => props.alignItems ? props.alignItems : 'center'};
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};

`

const Text = styled.Text`
color: white;
font-weight: 800;
text-transform: uppercase;
`


const Button = ({title, width, marginTop, onPress, justifyContent, alignItems, row, height, color}) => {
  
    return ( 
        <TouchableOpacity style={{width:'100%', alignItems: 'center'}} onPress={onPress}>
            <ButtonWrapper marginTop={marginTop} color={color} width={width} height={height} justifyContent={justifyContent} alignItems={alignItems} row={row}>
                <Text>{title}</Text>
            </ButtonWrapper>
        </TouchableOpacity>
     );
}
 
export default Button;