import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../source/pages/HomeScreen';
import CategoryScreen from '../source/pages/CategoryScreen';
import CouponsListScreen from '../source/pages/CouponsListScreen';
import SingleCouponScreen from '../source/pages/SingleCouponScreen';

const Navigator = () => {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const MainStack = ({props}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    );
  };

  const CouponStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Current Coupons" component={CouponsListScreen} />
        <Stack.Screen name="Single Coupons" component={SingleCouponScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={MainStack} />
        <BottomTab.Screen name="Coupons" component={CouponStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
