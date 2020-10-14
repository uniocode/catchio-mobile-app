import React from 'react';
import Clothing from '../../dummydata/Clothing'
import CategorySlide from '../organism/CategorySlide';
import ScrollContainer from '../atoms/ScrollContainer'
import { View, Text, StyleSheet } from 'react-native';
// Testing Spring Animations
import {useSpring, animated} from 'react-spring'


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

export default HomeScreen;


const style = StyleSheet.create({
  container: {
    width: '80%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '11%',
    left: '11%',
    zIndex: 10,
    backgroundColor: 'rgba(23,44,22,0.4)',
    borderRadius: 10
  },
  text: {
    color: 'white'
  }
})