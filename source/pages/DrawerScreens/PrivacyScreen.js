import React from 'react';
import ScrollContainer from '../../atoms/ScrollContainer';
import { MediumText } from '../../atoms/TextAtoms';
import {TouchableOpacity} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Colors from '../../../specs/Colors'

const PrivacyScreen = () => {
    return ( 
        <ScrollContainer>
            <MediumText>Privacy Screen</MediumText>
        </ScrollContainer>
     );
}
 

export const screenOptions = ({navigation}) => {

    const toggleDrawer = () => {
        navigation.toggleDrawer();
      }

    return {
        headerTitle: "Privacy",
        headerTintColor: Colors.pastelCoral,
        headerLeft: () => (
            <TouchableOpacity style={{marginHorizontal: 20}} onPress={toggleDrawer}>
              <FontAwesomeIcon icon={faBars} color={Colors.pastelCoral} size={25}/>
            </TouchableOpacity>
          )

    }
}
export default PrivacyScreen;