import React from 'react';
import {Image} from 'react-native';
import Colors from '../../../specs/Colors';
import {useSelector} from 'react-redux';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import {
  BigText,
  MediumText,
  SmallText,
  TextWrapper,
} from '../../atoms/TextAtoms';

const SingleDiscountScreen = ({route, navigation}) => {
  const id = route.params[0].id;
  const name = route.params[1].name;
  console.log(id);
  const allDiscounts = useSelector(
    (store) => store.mainReducer.currentDiscounts,
  );
  const selectedDiscount = allDiscounts.filter(
    (discount) => discount.id === id,
  );

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
    </NonScrollContainer>
  );
};

export const screenOptions = ({route, navigation}) => {
  return {
    headerTitle: route.params[1].name,
  };
};

export default SingleDiscountScreen;
