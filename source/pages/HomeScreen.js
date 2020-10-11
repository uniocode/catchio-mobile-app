import React from 'react';
import Clothing from '../../dummydata/Clothing'
import CategorySlide from '../organism/CategorySlide';
import ScrollContainer from '../atoms/ScrollContainer'

const HomeScreen = ({navigation}) => {



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
