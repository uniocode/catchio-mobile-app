import React, { useState } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faBluetooth} from '@fortawesome/free-brands-svg-icons'
import {useSelector} from 'react-redux'
import Colors from '../../../specs/Colors'

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

export const screenOptions = navData => {

  const [bluetoothStatus, setBluetoothStatus] = useState(false)

  // TODO: Migrate the function below to Redux Store
  const bluetoothFunction = () => {
    if (bluetoothStatus === false) {
      setBluetoothStatus(true)
    } else {
      setBluetoothStatus(false)
    }
  }

  return {
    headerTitle: "My Coupons",
    headerLeft: () => (
      <TouchableOpacity style={{marginHorizontal: 20}}>
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

export default CouponsList;
