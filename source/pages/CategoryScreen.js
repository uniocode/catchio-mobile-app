import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';




const CatergoryScreen = ({route, navigation}) => {

 const {id} = route.params

  return (
    <SafeAreaView>
      <View>
        <Text>Category Screen</Text>

      </View>
    </SafeAreaView>
  );
};

export default CatergoryScreen;
