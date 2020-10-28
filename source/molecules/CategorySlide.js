import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import DiscountBox from './DiscountBox';
import NonScrollContainer from '../atoms/NonScrollContainer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {SmallText, TextWrapper} from '../atoms/TextAtoms';
import Colors from '../../specs/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CategorySlide = ({
  category,
  title,
  opacity,
  categoryCallback,
  discountCallback,
}) => {
  return (
    <NonScrollContainer height="auto" marginTop={20}>
      <TextWrapper
        width={Dimensions.get('window').width - 50}
        flexDirection="row"
        justify="space-between">
        <SmallText color={Colors.pastelCoral} weight="bold" size="14px">
          {title}
        </SmallText>
        <TextWrapper width="50%" align="flex-end">
          <TouchableOpacity onPress={categoryCallback}>
            <TextWrapper
              flexDirection="row"
              align="flex-end"
              justify="flex-end">
              <SmallText color={Colors.darkGray} size="14px">
                View All
              </SmallText>
              <FontAwesomeIcon
                marginLeft={10}
                icon={faChevronRight}
                color={Colors.darkGray}
              />
            </TextWrapper>
          </TouchableOpacity>
        </TextWrapper>
      </TextWrapper>
      <FlatList
        style={{opacity: opacity}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}
        horizontal={true}
        data={category}
        renderItem={(itemData) => (
          <DiscountBox
            key={itemData.item.id}
            name={itemData.item.name}
            image={itemData.item.imgUrl}
            category={itemData.item.category}
            discount={itemData.item.percent}
            callback={() =>
              discountCallback(itemData.item.id, itemData.item.name)
            }
          />
        )}
      />
    </NonScrollContainer>
  );
};

export default CategorySlide;
