import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native';
import styled from 'styled-components';
import Colors from '../../specs/Colors';
import {SmallText} from '../atoms/TextAtoms';

const Container = styled.View`
  width: 170px;
  height: 170px;
  background: white;
  border-radius: 10px;
  margin: 10px 5px 5px 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px rgba(181, 131, 141, 0.2);
  overflow: hidden;
`;

const TextContainer = styled.View`
  width: 170px;
  align-items: flex-start;
  margin: 10px;
`;

const DiscountBox = ({
  name,
  discount,
  image,
  validUntil,
  category,
  callback,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={callback}>
      <Container image={image}>
        <ImageBackground
          source={{uri: image}}
          style={{
            flex: 1,
            resizeMode: 'cover',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}></ImageBackground>
      </Container>
      <TextContainer>
        <SmallText size="14px" weight="bold" color={Colors.pastelCoral}>
          {name}
        </SmallText>
        <SmallText size="13px" weight="normal" color={Colors.darkGray}>
          {discount} % for all
        </SmallText>
        <SmallText size="13px" weight="normal" color={Colors.darkGray}>
          {category}
        </SmallText>
      </TextContainer>
    </TouchableOpacity>
  );
};

export default DiscountBox;
