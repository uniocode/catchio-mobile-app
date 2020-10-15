import React from 'react';
import {TouchableOpacity} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import ScrollContainer from '../../atoms/ScrollContainer';
import { MediumText } from '../../atoms/TextAtoms';

const MyProfileScreen = () => {
    return ( 
        <ScrollContainer>
            <MediumText>
                My profile
            </MediumText>
        </ScrollContainer>
     );
}

export const screenOptions = ({navigation}) => {

    const toggleDrawer = () => {
        navigation.toggleDrawer();
      }
  

    return {
        headerTitle: "My Account",
        headerLeft: () => (
            <TouchableOpacity style={{marginHorizontal: 20}} onPress={toggleDrawer}>
              <FontAwesomeIcon icon={faBars} color={Colors.pastelCoral} size={25}/>
            </TouchableOpacity>
          )
    }
}
 
export default MyProfileScreen
