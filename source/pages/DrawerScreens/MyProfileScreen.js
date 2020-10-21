import React from 'react';
import {TouchableOpacity} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import ScrollContainer from '../../atoms/ScrollContainer';
import { MediumText } from '../../atoms/TextAtoms';
import Button from '../../atoms/ButtonAtoms'
import { useDispatch, useSelector } from 'react-redux';
import {LOG_IN} from '../../../store/action'

const MyProfileScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const login = useSelector(store => store.mainReducer.loggedIn)

    const logOff = () => {
        dispatch({type: LOG_IN})
    }


    return ( 
        <ScrollContainer>
            <MediumText>
                My profile
            </MediumText>
            <Button title='Log off' width='50%' callback={logOff}/>
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
