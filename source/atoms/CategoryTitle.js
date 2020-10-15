import React from 'react';
import styled from 'styled-components'
import Colors from '../../specs/Colors'


export const Title = styled.Text`
font-size: 15px;
color: ${Colors.pastelCoral};
font-weight: bold;
padding-left: 25px;
`

const Container = styled.View`

width: 100%;
margin-top: 20px;
`

const CategoryTitle = ({title}) => {
    return ( 
        <Container>
            <Title>{title}</Title>
        </Container>
     );
}
 
export default CategoryTitle;
