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
import {SvgUri} from 'react-native-svg';
import Img from '../../../assets/icons/dot.svg';
import DotsMenu from '../../atoms/DotsMenu';

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
    navigation.navigate('Category', {category: category});
  };

  return (
    <>
      {/* {newCouponActive && <CouponCard />} */}
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
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return {
    headerTitle: 'Discounts',
    headerLeft: () => (
      <TouchableOpacity style={{marginHorizontal: 20}} onPress={toggleDrawer}>
        <DotsMenu />
      </TouchableOpacity>
    ),
  };
};

export default HomeScreen;
