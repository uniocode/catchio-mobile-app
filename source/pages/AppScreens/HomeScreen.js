import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {BLUETOOTH, SAVE_COUPON} from '../../../store/action'
import CategorySlide from '../../organism/CategorySlide';
import ScrollContainer from '../../atoms/ScrollContainer'
import { TouchableOpacity } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faBluetooth} from '@fortawesome/free-brands-svg-icons'
import Colors from '../../../specs/Colors'

const HomeScreen = ({navigation}) => {


  const currentDiscounts = useSelector(state => state.mainReducer.currentDiscounts)
  const dispatch = useDispatch()


  const onPressFunction = (id) => {
    // Giving id as params for the category screen in order to use to filter
    // navigation.navigate('Category', {id: id})
    dispatch({type: SAVE_COUPON, data: {id:id}})
  }

  return (
   <ScrollContainer> 
  <CategorySlide title='Hot Discounts' category={currentDiscounts} onPressFunction={onPressFunction}/>
  <CategorySlide title='Last Chances' category={currentDiscounts} onPressFunction={onPressFunction}/>
  <CategorySlide title='Delicious Offers' category={currentDiscounts} onPressFunction={onPressFunction}/>
  <CategorySlide title='Coming Discounts' category={currentDiscounts} onPressFunction={onPressFunction}/>
  </ScrollContainer>
  );
};

export const screenOptions = ({navigation}) => {

    const bluetoothStatus = useSelector(state => state.mainReducer.bluetoothStatus)
    const dispatch = useDispatch()

    const bluetoothFunction = () => {
      dispatch({type: BLUETOOTH})
    }

    const toggleDrawer = () => {
      navigation.toggleDrawer();
    }

  return {
    headerTitle: 'Current Discounts',
    headerLeft: () => (
      <TouchableOpacity style={{marginHorizontal: 20}} onPress={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} color={Colors.pastelCoral} size={25}/>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity style={{marginHorizontal: 20}} onPress={bluetoothFunction}>
        <FontAwesomeIcon icon={faBluetooth} color={bluetoothStatus ? '#287AA9' : Colors.mediumGray} size={25}/>
      </TouchableOpacity>
    )
  }
}



export default HomeScreen;