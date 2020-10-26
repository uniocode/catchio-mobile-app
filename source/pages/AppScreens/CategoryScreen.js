import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const CatergoryScreen = ({route, navigation}) => {
  const {category} = route.params;

  const store = useSelector((store) => store.Clothing);
  console.log(store);

  return (
    <SafeAreaView>
      <View>
        <Text>Category Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CatergoryScreen;
