import styled from 'styled-components'
import Colors from '../../specs/Colors'

export const TextWrapper = styled.View`
width: ${props => props.width ? props.width : `100%`};
align-items: ${props => props.align? props.align : 'center'};
margin-top: ${props => props.marginTop ? props.marginTop : `0`};
padding-top: ${props => props.paddingTop ? props.paddingTop : '0'};
padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0'};
padding-right: ${props => props.paddingRight ? props.paddingRight : '0'};
`

export const BigText = styled.Text`
font-size: 48px;
font-weight: 800;
margin: 0;
padding: 0;
margin-top: ${props => props.marginTop? props.marginTop : '0px'};
${props => props.color ? `color: ${props.color};` : null}

`

export const MediumText = styled.Text`
font-size: 24px;
${props => props.color ? `color: ${props.color};` : null}
font-weight: bold;
margin-top: ${props => props.marginTop ? props.marginTop : `0px`};
`

export const SmallText = styled.Text`
font-size: ${props => props.size ? props.size : '18px'};
margin-top: ${props => props.marginTop ? props.marginTop : `0px`};
${props => props.color ? `color: ${props.color};` : null}
font-weight: ${props => props.fontWeight? props.fontWeight : 'normal'};
`





