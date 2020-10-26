import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BLUETOOTH, SAVE_COUPON} from '../../../store/action';
import CategorySlide from '../../molecules/CategorySlide';
import ScrollContainer from '../../atoms/ScrollContainer';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faBluetooth} from '@fortawesome/free-brands-svg-icons';
import Colors from '../../../specs/Colors';
import CouponCard from '../../molecules/CouponCard';
import SearchBar from '../../molecules/SearchBar';

const HomeScreen = ({navigation}) => {
  const currentDiscounts = useSelector(
    (state) => state.mainReducer.currentDiscounts,
  );
  const newCouponActive = useSelector(
    (store) => store.mainReducer.newCouponActive,
  );
  const dispatch = useDispatch();

  const discountCallback = (id, name) => {
    navigation.navigate('SingleDiscount', [{id: id}, {name: name}]);
  };

  const categoryCallback = (category) => {
    navigation.navigate('Category', {params: [category]});
  };

  return (
    <>
      {newCouponActive && <CouponCard />}
      <ScrollContainer>
        <SearchBar />
        <CategorySlide
          opacity={newCouponActive ? 0.3 : 1}
          title="Hot Discounts"
          category={currentDiscounts}
          categoryCallback={categoryCallback}
          discountCallback={discountCallback}
        />
        <CategorySlide
          opacity={newCouponActive ? 0.3 : 1}
          title="Last Chances"
          category={currentDiscounts}
          categoryCallback={categoryCallback}
          discountCallback={discountCallback}
        />
        <CategorySlide
          opacity={newCouponActive ? 0.3 : 1}
          title="Delicious Offers"
          category={currentDiscounts}
          categoryCallback={categoryCallback}
          discountCallback={discountCallback}
        />
        <CategorySlide
          opacity={newCouponActive ? 0.3 : 1}
          title="Coming Discounts"
          category={currentDiscounts}
          categoryCallback={categoryCallback}
          discountCallback={discountCallback}
        />
      </ScrollContainer>
    </>
  );
};

export const screenOptions = ({navigation}) => {
  const bluetoothStatus = useSelector(
    (state) => state.mainReducer.bluetoothStatus,
  );
  const dispatch = useDispatch();

  const bluetoothFunction = () => {
    dispatch({type: BLUETOOTH});
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return {
    headerTitle: 'Discounts',
    headerLeft: () => (
      <TouchableOpacity style={{marginHorizontal: 20}} onPress={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} color={Colors.pastelCoral} size={25} />
      </TouchableOpacity>
    ),
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

export default HomeScreen;
