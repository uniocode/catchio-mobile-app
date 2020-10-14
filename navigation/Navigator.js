import React from 'react';
import {View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faHome, faTicketAlt, faShoppingBag, faCommentDollar} from '@fortawesome/free-solid-svg-icons'
import Colors from '../specs/Colors'
import LoginScreen from '../source/pages/LoginScreen'
import SignUpScreen from '../source/pages/SignUpScreen'
import ForgotPasswordScreen from '../source/pages/ForgotPasswordScreen'
import HomeScreen from '../source/pages/HomeScreen';
import CategoryScreen from '../source/pages/CategoryScreen';
import CouponsListScreen from '../source/pages/CouponsListScreen';
import SingleCouponScreen from '../source/pages/SingleCouponScreen';

const Navigator = () => {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();



  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerTintColor: Colors.pastelCoral}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "ACTUAL DISCOUNTS",
        }}/>
        <Stack.Screen name="Category" component={CategoryScreen} /> 
      </Stack.Navigator>
    );
  };

  const LoginStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}  name="Login" component={LoginScreen}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen}/>
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
      </Stack.Navigator>
    )
  }

  const CouponStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerTintColor: Colors.pastelCoral}}>
        <Stack.Screen name="Current Coupons" component={CouponsListScreen} options={{
          title: 'MY COUPONS'
        }}/>
        <Stack.Screen name="Single Coupons" component={SingleCouponScreen} />
      </Stack.Navigator>
    );
  };


  const BottomTabBar = () => {
    return (
      <BottomTab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let color = focused ? Colors.pastelCoral : Colors.mediumGray
          if (route.name === "Home") {
            iconName = faShoppingBag
          } else if (route.name === "Coupons") {
            iconName = faCommentDollar
          }
          // Returning FontAwesome Components 
          return <View style={style.tabWrapper}><FontAwesomeIcon icon={iconName} size={30} color={color}/></View>
        }, 
      })}  tabBarOptions={{showLabel: false}}>
        <BottomTab.Screen name="Home" component={MainStack}/>
        <BottomTab.Screen name="Coupons" component={CouponStack} />
      </BottomTab.Navigator>
    )
  }

  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen options={{headerShown: false}}  name="Login Stack" component={LoginStack}/>
       <Stack.Screen name="Main Stack" component={BottomTabBar}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  tabWrapper: {
    marginTop: 20
  }
})

export default Navigator;
