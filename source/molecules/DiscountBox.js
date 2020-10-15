import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native'
import styled from 'styled-components'
import Colors from '../../specs/Colors'

const Container = styled.View`

width: 170px;
height: 170px;

border-radius: 10px;
margin: 10px 5px 5px 5px;
justify-content: center;
align-items: center;
box-shadow: 0 0 6px rgba(181, 131, 141, 0.2);
overflow: hidden;
`

const TextContainer = styled.View`
width: 170px;
align-items: flex-start;
margin: 10px;
`

const Text = styled.Text`
font-size: 12px;
font-weight: bold;
color: ${Colors.rosyBrown};
text-align: center;

`


const DiscountBox = ({name, discount, image, validUntil, category, callback}) => {
    return (  
        <TouchableOpacity activeOpacity={0.5} onPress={callback}>
        <Container image={image}>
        <ImageBackground source={{uri: image}} style={{flex: 1, resizeMode: 'cover', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Text>{discount} % for all</Text>
    <Text>{category}</Text>
        </ImageBackground>

        </Container>
        <TextContainer>
        <Text>{name}</Text>
        </TextContainer>
        </TouchableOpacity>
    );
}
 
export default DiscountBox;