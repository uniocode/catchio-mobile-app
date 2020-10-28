import styled from 'styled-components';
import {ScrollView} from 'react-native';
import Colors from '../../specs/Colors';

const NonScrollContainer = styled.View`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  background: ${(props) =>
    props.background ? props.background : Colors.white};
  align-items: center;
  align-self: center;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  position: ${(props) => (props.position ? props.position : 'relative')};
  ${(props) => (props.top ? `top: ${props.top}` : null)}
`;

export default NonScrollContainer;
