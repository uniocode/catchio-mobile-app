import React from 'react';
import {View, FlatList} from 'react-native';
import CategoryTitle from '../atoms/CategoryTitle'
import DiscountBox from '../molecules/DiscountBox'
import NonScrollContainer from '../atoms/NonScrollContainer'


const CategorySlide = ({category, title, onPressFunction}) => {
    return ( 
        <NonScrollContainer>
        <View>
       
          <CategoryTitle title={title}/>
          <FlatList contentContainerStyle={{paddingHorizontal: 20}} horizontal={true} data={category} renderItem={itemData =>   <DiscountBox name={itemData.item.name} category={itemData.item.category} discount={itemData.item.percent} callback={() => onPressFunction(itemData.item.id)}/>}/>
  
        </View>
        </NonScrollContainer>
     );
}
 
export default CategorySlide;