import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Animated, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {BLUETOOTH} from '../../../store/action';
import CategorySlide from '../../organism/CategorySlide';
import DiscountBox from '../../molecules/DiscountBox';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faBluetooth} from '@fortawesome/free-brands-svg-icons';
import Colors from '../../../specs/Colors';
import ScrollContainer from '../../atoms/ScrollContainer';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import CouponCard from '../../organism/CouponCard';

const CouponsList = () => {
  const acceptedCoupons = useSelector(
    (state) => state.mainReducer.acceptedCoupons,
  );
  console.log(acceptedCoupons + ' love');

  const renderItem = (item) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <ScrollContainer fullHeight={true}>
      {/* <CouponCard data={acceptedCoupons} renderCard={renderItem}/> */}

      {/* {acceptedCoupons.map(itemData => {return <CouponCard/>})} */}
      <FlatList
        style={{width: '100%', height: '100%'}}
        data={acceptedCoupons}
        renderItem={(itemData) => (
          <CouponCard
            name={itemData.item.name}
            image={itemData.item.imgUrl}
            percent={itemData.item.percent}
          />
        )}
      />
    </ScrollContainer>
  );
};

export const screenOptions = (navData) => {
  const bluetoothStatus = useSelector(
    (state) => state.mainReducer.bluetoothStatus,
  );
  const dispatch = useDispatch();

  const bluetoothFunction = () => {
    dispatch({type: BLUETOOTH});
  };

  return {
    headerTitle: 'My Coupons',
    headerLeft: () => null,
    headerRight: () => (
      <TouchableOpacity
        style={{marginHorizontal: 20}}
        onPress={bluetoothFunction}>
        <FontAwesomeIcon
          icon={faBluetooth}
          color={bluetoothStatus ? '#287AA9' : Colors.mediumGray}
          size={25}
        />
      </TouchableOpacity>
    ),
  };
};

const style = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    backgroundColor: Colors.pastelCoral,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default CouponsList;
