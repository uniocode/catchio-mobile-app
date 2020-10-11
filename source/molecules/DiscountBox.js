import React from 'react';
import {TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import Colors from '../../specs/Colors'

const Container = styled.View`

width: 170px;
height: 170px;
background-color: ${Colors.lightGray};
border: 2px solid ${Colors.pastelCoral};
border-radius: 10px;
margin: 10px 5px;
justify-content: center;
align-items: center;
`

const Text = styled.Text`
font-size: 12px;
font-weight: bold;
color: ${Colors.rosyBrown};
text-align: center;
line-height: 25px;

`

const DiscountBox = ({name, discount, image, validUntil, category, callback}) => {
    return (  
        <TouchableOpacity activeOpacity={0.5} onPress={callback}>
        <Container>
            <Text>{name}</Text>
    <Text>{discount} % for all {category}</Text>
        </Container>
        </TouchableOpacity>
    );
}
 
export default DiscountBox;