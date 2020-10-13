import React from 'react';
import {View, FlatList} from 'react-native';
import CategoryTitle from '../atoms/CategoryTitle'
import DiscountBox from '../molecules/DiscountBox'
import NonScrollContainer from '../atoms/NonScrollContainer'


const CategorySlide = ({category, title, onPressFunction}) => {
    return ( 
        <NonScrollContainer>
          <CategoryTitle title={title}/>
          <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 20}} horizontal={true} data={category} renderItem={itemData =>   <DiscountBox name={itemData.item.name} image={itemData.item.imgUrl} category={itemData.item.category} discount={itemData.item.percent} callback={() => onPressFunction(itemData.item.id)}/>}/>     
        </NonScrollContainer>
     );
}
 
export default CategorySlide;