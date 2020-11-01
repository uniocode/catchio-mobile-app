import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {BLUETOOTH} from '../../../store/action';
import {Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBluetooth} from '@fortawesome/free-brands-svg-icons';
import Colors from '../../../specs/Colors';
import ScrollContainer from '../../atoms/ScrollContainer';

const CouponsList = () => {
  const [coupons, setCoupons] = useState();

  const acceptedCoupons = useSelector(
    (state) => state.mainReducer.acceptedCoupons,
  );

  const renderItem = (itemData) => {
    return <Text> hwy{itemData.item.name}</Text>;
  };

  useEffect(() => {
    setCoupons(acceptedCoupons);
  }, [acceptedCoupons]);

  useEffect(() => {
    setCoupons(acceptedCoupons);
  }, []);

  return (
    <ScrollContainer fullHeight={true}>
      <FlatList
        style={{width: '100%', height: '100%'}}
        data={coupons}
        renderItem={renderItem}
      />
    </ScrollContainer>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'My Coupons',
    headerLeft: () => null,
  };
};

export default CouponsList;
