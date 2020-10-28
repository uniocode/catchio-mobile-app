import styled from 'styled-components';

const ScrollContainer = styled.ScrollView`
  width: ${(props) => (props.width ? props.width : '100%')};
  background: ${(props) =>
    props.background ? props.background : Colors.white};
`;

export default ScrollContainer;
