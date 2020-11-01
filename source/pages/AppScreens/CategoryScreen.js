import React from 'react';
import {SafeAreaView, View, Text, FlatList, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import NonScrollContainer from '../../atoms/NonScrollContainer';
import {MediumText, SmallText, TextWrapper} from '../../atoms/TextAtoms';
import Colors from '../../../specs/Colors';
import DiscountBox from '../../molecules/DiscountBox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../molecules/SearchBar';

const CatergoryScreen = ({route, navigation}) => {
  const category = route.params.category;

  const categoryDiscounts = useSelector(
    (store) => store.mainReducer.currentDiscounts,
  );

  return (
    <NonScrollContainer>
      <TextWrapper marginBottom="10px">
        <SearchBar />
      </TextWrapper>
      <FlatList
        flexDirection="column"
        numColumns="2"
        alignItems="center"
        width={Dimensions.get('window').width}
        data={categoryDiscounts}
        renderItem={(itemData) => (
          <DiscountBox
            key={itemData.item.id}
            name={itemData.item.name}
            image={itemData.item.imgUrl}
            category={itemData.item.category}
            discount={itemData.item.percent}
          />
        )}
      />
    </NonScrollContainer>
  );
};

export const screenOptions = ({route, navigation}) => {
  const category = route.params.category;

  return {
    headerTitle: category,
    headerLeft: () => (
      <TouchableOpacity style={{marginHorizontal: 20}}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size={20}
          color={Colors.pastelCoral}
        />
      </TouchableOpacity>
    ),
  };
};

export default CatergoryScreen;
