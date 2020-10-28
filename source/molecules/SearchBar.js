import {Input} from '../atoms/InputAtoms';
import NonScrollContainer from '../atoms/NonScrollContainer';
import React from 'react';
import {SmallText, TextWrapper} from '../atoms/TextAtoms';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../specs/Colors';

const SearchBar = () => {
  return (
    <NonScrollContainer
      marginTop={20}
      height="auto"
      flexDirection="row"
      justifyContent="center"
      alignItems="center">
      <TextWrapper position="absolute" height="100%" width="10%" left="11%">
        <FontAwesomeIcon icon={faSearch} size={20} color="#e5989b" />
      </TextWrapper>
      <Input textAlign="center" placeholder="Search for discounts" />
    </NonScrollContainer>
  );
};

export default SearchBar;
