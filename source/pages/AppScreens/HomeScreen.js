import React, {useState} from 'react';
import Clothing from '../../../dummydata/Clothing'
import CategorySlide from '../../organism/CategorySlide';
import ScrollContainer from '../../atoms/ScrollContainer'
import { Text, TouchableOpacity } from 'react-native';
import {useSpring, animated} from 'react-spring'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faBluetooth} from '@fortawesome/free-brands-svg-icons'
import Colors from '../../../specs/Colors'

const HomeScreen = ({navigation}) => {

  const specs = useSpring({opacity:1, from: {opacity:0}})
  const AnimatedView = animated(Text)

  const onPressFunction = (id) => {
    // Giving id as params for the category screen in order to use to filter
    navigation.navigate('Category', {id: id})
  }

  return (
   <ScrollContainer> 
  <CategorySlide title='Hot Discounts' category={Clothing} onPressFunction={onPressFunction}/>
  <CategorySlide title='Last Chances' category={Clothing} onPressFunction={onPressFunction}/>
  <CategorySlide title='Delicious Offers' category={Clothing} onPressFunction={onPressFunction}/>
  <CategorySlide title='Coming Discounts' category={Clothing} onPressFunction={onPressFunction}/>
  </ScrollContainer>
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
    headerTitle: 'Current Discounts',
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



export default HomeScreen;