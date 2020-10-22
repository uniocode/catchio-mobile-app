import styled from 'styled-components';
import Colors from '../../specs/Colors';

export const FormWrapper = styled.View`
  width: ${(props) => (props.width ? props.width : `100%`)};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : `0`)};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '0')};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : '0')};
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : '0')};
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  border: ${(props) => (props.error ? Colors.pastelRed : Colors.mediumGray)} 1px
    solid;
  border-radius: 200px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  padding: 15px;
  color: ${Colors.darkGray};
`;
