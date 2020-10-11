import styled from 'styled-components'
import Colors from '../../specs/Colors'

export const TextWrapper = styled.View`
width: ${props => props.width ? props.width : 100}%;
align-items: ${props => props.align? props.align : 'center'};
padding: ${props => props.padding ? props.padding : 0}px;
`

export const BigText = styled.Text`
font-size: 48px;
font-weight: 800;
margin: 0;
padding: 0;
margin-top: ${props => props.marginTop? props.marginTop : 0}px;
color: ${props => props.gray ? Colors.mediumGray : Colors.pastelCoral};

`

export const SmallText = styled.Text`
font-size: 18px;
color: ${props => props.gray ? Colors.mediumGray : Colors.pastelCoral};
`



