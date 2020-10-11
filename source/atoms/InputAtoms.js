import styled from 'styled-components'
import Colors from '../../specs/Colors'

export const Input = styled.TextInput`
width: 80%;
height: 50px;
border: ${Colors.mediumGray} 1px solid;
border-radius: 200px;
margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
padding: 15px;
color: ${Colors.darkGray};
`