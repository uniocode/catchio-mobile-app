import React, { useEffect, useState } from 'react';
import {FlatList} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {BLUETOOTH} from '../../../store/action'
import CategorySlide from '../../organism/CategorySlide'
import DiscountBox from '../../molecules/DiscountBox'
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faBluetooth} from '@fortawesome/free-brands-svg-icons'
import Colors from '../../../specs/Colors'
import ScrollContainer from '../../atoms/ScrollContainer';


const CouponsList = () => {

 

  const savedDiscounts = useSelector(state => state.mainReducer.savedDiscounts)



  return (
    <ScrollContainer>
           <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 20}} horizontal={true} data={savedDiscounts} renderItem={itemData =>   <Text>{itemData.item.name}</Text>}/>  
    </ScrollContainer>
  );
};

export const screenOptions = navData => {

  const bluetoothStatus = useSelector(state => state.mainReducer.bluetoothStatus)
  const dispatch = useDispatch()

    const bluetoothFunction = () => {
      dispatch({type: BLUETOOTH})
    }
  

  return {
    headerTitle: "My Coupons",
    headerLeft: () => (
      null
    ),
    headerRight: () => (
      <TouchableOpacity style={{marginHorizontal: 20}} onPress={bluetoothFunction}>
        <FontAwesomeIcon icon={faBluetooth} color={bluetoothStatus ? '#287AA9' : Colors.mediumGray} size={25}/>
      </TouchableOpacity>
    )
  }
}

export default CouponsList;
