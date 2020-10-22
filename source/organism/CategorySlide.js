import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import CategoryTitle from '../atoms/CategoryTitle';
import DiscountBox from '../molecules/DiscountBox';
import NonScrollContainer from '../atoms/NonScrollContainer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {SmallText, TextWrapper} from '../atoms/TextAtoms';
import Colors from '../../specs/Colors';

const CategorySlide = ({category, title, onPressFunction, opacity}) => {
  return (
    <NonScrollContainer height="auto">
      <TextWrapper
        alignSelf="center"
        direction="row"
        background="yellow"
        marginTop="20px"
        width={Dimensions.get('window').width - 50}>
        <TextWrapper width="50%" align="flex-start">
          <SmallText color={Colors.pastelCoral} weight="bold" size="14px">
            {title}
          </SmallText>
        </TextWrapper>
        <TextWrapper width="50%" justify="flex-end" direction="row">
          <SmallText color={Colors.darkGray} size="14px">
            View All
          </SmallText>
          <FontAwesomeIcon
            marginLeft={10}
            icon={faChevronRight}
            color={Colors.darkGray}
          />
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
            callback={() => onPressFunction(itemData.item.id)}
          />
        )}
      />
    </NonScrollContainer>
  );
};

export default CategorySlide;
