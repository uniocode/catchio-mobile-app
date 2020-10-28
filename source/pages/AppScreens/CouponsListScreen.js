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

  const renderItem = (item) => {
    return <Text>{item.name}</Text>;
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
        renderItem={(itemData) => <Text>Hey {itemData.item.id}</Text>}
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

export default CouponsList;
