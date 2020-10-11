import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useSelector} from 'react-redux'

const CouponsList = () => {


  const acceptedCoupons = useSelector(state => state.acceptedCoupons)
  console.log(acceptedCoupons)

  return (
    <SafeAreaView>
      <View>
        <Text> Here you will see your active coupons.</Text>
      </View>
    </SafeAreaView>
  );
};

export default CouponsList;
