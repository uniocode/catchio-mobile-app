import React from 'react';
import {Image} from 'react-native';
import Colors from '../../../specs/Colors';
import {useDispatch, useSelector} from 'react-redux';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import {
  BigText,
  MediumText,
  SmallText,
  TextWrapper,
} from '../../atoms/TextAtoms';
import Button from '../../atoms/ButtonAtoms';
import {ADD_COUPON, SAVE_COUPON} from '../../../store/action';
import {BleManager} from 'react-native-ble-plx';

const SingleDiscountScreen = ({route, navigation}) => {
  const id = route.params[0].id;
  console.log(id);
  const allDiscounts = useSelector(
    (store) => store.mainReducer.currentDiscounts,
  );
  const selectedDiscount = allDiscounts.filter(
    (discount) => discount.id === id,
  );

  const dispatch = useDispatch();

  const acceptCoupon = () => {
    dispatch({type: SAVE_COUPON, data: selectedDiscount[0].id});
  };

  // -----

  //-----

  return (
    <NonScrollContainer height="100%">
      <TextWrapper marginTop="20px">
        <BigText color={Colors.pastelCoral}>{selectedDiscount[0].name}</BigText>
      </TextWrapper>
      <SmallText color={Colors.darkGray}>
        {selectedDiscount[0].category}
      </SmallText>
      <Image
        width={500}
        height={250}
        source={{uri: selectedDiscount[0].imgUrl}}
      />
      <Button title="ADD" callback={acceptCoupon} />
      <Button title="Bluetooth" callback={turnBlueOn} />
    </NonScrollContainer>
  );
};

export const screenOptions = ({route, navigation}) => {
  return {
    headerTitle: route.params[1].name,
  };
};

export default SingleDiscountScreen;
