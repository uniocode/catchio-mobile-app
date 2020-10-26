import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import Colors from '../../specs/Colors';

const ButtonWrapper = styled.View`
width: ${(props) => (props.width ? props.width : `0px`)};
height: ${(props) => (props.height ? props.height : `50px`)};
background: ${(props) => (props.color ? props.color : Colors.mediumGray)}
margin-top: ${(props) => (props.marginTop ? props.marginTop : `0px`)};
${(props) => (props.round ? 'border-radius: 200px;' : null)};
flex-direction: ${(props) => (props.direction ? props.direction : 'column')}
align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
justify-content: ${(props) =>
  props.justifyContent ? props.justifyContent : 'center'};

`;

const Text = styled.Text`
  color: white;
  font-weight: 800;
  text-transform: uppercase;
`;

const Button = ({
  title,
  width,
  marginTop,
  callback,
  justifyContent,
  alignItems,
  row,
  height,
  color,
  round,
}) => {
  return (
    <TouchableOpacity
      style={{width: width, alignItems: 'center'}}
      onPress={callback}>
      <ButtonWrapper
        round={round}
        marginTop={marginTop}
        color={color}
        width="100%"
        height={height}
        justifyContent={justifyContent}
        alignItems={alignItems}
        row={row}>
        <Text>{title}</Text>
      </ButtonWrapper>
    </TouchableOpacity>
  );
};

export default Button;
