import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faHome, faTicketAlt, faShoppingBag, faCommentDollar} from '@fortawesome/free-solid-svg-icons'
import Colors from '../specs/Colors'
import LoginScreen, {screenOptions as loginScreenOptions} from '../source/pages/LoginScreens/LoginScreen'
import SignUpScreen, {screenOptions as signUpScreenOptions} from '../source/pages/LoginScreens/SignUpScreen'
import ForgotPasswordScreen, {screenOptions as forgotPasswordScreenOptions} from '../source/pages/LoginScreens/ForgotPasswordScreen'
import HomeScreen, {screenOptions as homeScreenOptions} from '../source/pages/AppScreens/HomeScreen';
import CategoryScreen from '../source/pages/AppScreens/CategoryScreen';
import CouponsListScreen, {screenOptions as couponScreenOptions} from '../source/pages/AppScreens/CouponsListScreen';
import SingleCouponScreen from '../source/pages/AppScreens/SingleCouponScreen';

const Navigator = () => {

  // will render Login Stack after checking the username and password. If the data exists the user will be directed to the Main Stack
  const [login, setLogin] = useState(false)

  // React Native Navigation 5

  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const LoginStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen options={loginScreenOptions}  name="Login" component={LoginScreen}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={signUpScreenOptions}/>
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} options={forgotPasswordScreenOptions}/>
      </Stack.Navigator>
    )
  }

// TODO: Clean up and design the inner stack navigations

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerTintColor: Colors.pastelCoral}}>
        <Stack.Screen name="Home" component={HomeScreen} options={homeScreenOptions}/>
        <Stack.Screen name="Category" component={CategoryScreen} /> 
      </Stack.Navigator>
    );
  };



  const CouponStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerTintColor: Colors.pastelCoral}}>
        <Stack.Screen name="Current Coupons" component={CouponsListScreen} options={couponScreenOptions}/>
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
       {!login && <Stack.Screen options={{headerShown: false}}  name="Login Stack" component={LoginStack}/>}
       <Stack.Screen name="Main Stack" component={BottomTabBar} options={{headerShown: false}}/>
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
