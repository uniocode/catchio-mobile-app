import React from 'react';
import Clothing from '../../dummydata/Clothing'
import CategorySlide from '../organism/CategorySlide';
import ScrollContainer from '../atoms/ScrollContainer'

const HomeScreen = () => {
  return (
   <ScrollContainer>
  <CategorySlide title='Hot Discounts' category={Clothing}/>
  <CategorySlide title='Last Chances' category={Clothing}/>
  <CategorySlide title='Delicious Offers' category={Clothing}/>
  <CategorySlide title='Coming Discounts' category={Clothing}/>
  </ScrollContainer>
  );
};

export default HomeScreen;
