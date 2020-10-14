import styled from 'styled-components'
import {ScrollView} from 'react-native'

const NonScrollContainer = styled.View`
width: 100%;
${props => props.fullHeight ? "height: 100%;" : null}
background: white;
align-items: center;


`

 
export default NonScrollContainer;
