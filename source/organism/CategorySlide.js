import React from 'react';
import {View, FlatList} from 'react-native';
import CategoryTitle from '../atoms/CategoryTitle'
import DiscountBox from '../molecules/DiscountBox'
import NonScrollContainer from '../atoms/NonScrollContainer'


const CategorySlide = ({category, title, onPressFunction, opacity}) => {
    return ( 
        <NonScrollContainer  height='auto'>
          <CategoryTitle title={title}/>
          <FlatList style={{opacity: opacity}} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 20}} horizontal={true} data={category} renderItem={itemData =>   <DiscountBox key={itemData.item.id} name={itemData.item.name} image={itemData.item.imgUrl} category={itemData.item.category} discount={itemData.item.percent} callback={() => onPressFunction(itemData.item.id)}/>}/>     
        </NonScrollContainer>
     );
}
 
export default CategorySlide;