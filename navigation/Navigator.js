import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faHome, faTicketAlt, faShoppingBag, faCommentDollar} from '@fortawesome/free-solid-svg-icons'
import Button from '../source/atoms/ButtonAtoms'
import Colors from '../specs/Colors'
import LoginScreen, {screenOptions as loginScreenOptions} from '../source/pages/LoginScreens/LoginScreen'
import SignUpScreen, {screenOptions as signUpScreenOptions} from '../source/pages/LoginScreens/SignUpScreen'
import ForgotPasswordScreen, {screenOptions as forgotPasswordScreenOptions} from '../source/pages/LoginScreens/ForgotPasswordScreen'
import HomeScreen, {screenOptions as homeScreenOptions} from '../source/pages/AppScreens/HomeScreen';
import CategoryScreen from '../source/pages/AppScreens/CategoryScreen';
import CouponsListScreen, {screenOptions as couponScreenOptions} from '../source/pages/AppScreens/CouponsListScreen';
import SingleCouponScreen from '../source/pages/AppScreens/SingleCouponScreen';
import TermsOfUseScreen, {screenOptions as termsScreenOptions} from '../source/pages/DrawerScreens/TermsOfUseScreen';
import MyProfileScreen, {screenOptions as myProfileScreenOptions} from '../source/pages/DrawerScreens/MyProfileScreen'
import SettingScreen, {screenOptions as settingScreenOptions} from '../source/pages/DrawerScreens/SettingScreen'
import PrivacyScreen, {screenOptions as privacyScreenOptions} from '../source/pages/DrawerScreens/PrivacyScreen'


const Navigator = () => {

  // will render Login Stack after checking the username and password. If the data exists the user will be directed to the Main Stack
  const [login, setLogin] = useState(true)

  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

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


const TermsOfUseStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: Colors.pastelCoral}}>
      <Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} options={termsScreenOptions}/>
    </Stack.Navigator>
  )
}

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: Colors.pastelCoral}}>
      <Stack.Screen name="settings" component={SettingScreen} options={settingScreenOptions}/>
    </Stack.Navigator>
  )
}

const MyProfileStack = () => {
 return (
  <Stack.Navigator screenOptions={{headerTintColor: Colors.pastelCoral}}>
  <Stack.Screen name="TermsOfUse" component={MyProfileScreen} options={myProfileScreenOptions}/>
</Stack.Navigator>
 )
}

const PrivacyStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerTintColor: Colors.pastelCoral}}> 
   <Stack.Screen name="TermsOfUse" component={PrivacyScreen} options={privacyScreenOptions}/>
 </Stack.Navigator>
  )
 }

  const LeftDrawer = () => {
    return (
      <Drawer.Navigator drawerContentOptions={{
        activeBackgroundColor: Colors.pastelCoral,
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.darkGray
        }}>
        <Drawer.Screen name="HomeDrawer" component={MainStack} options={{title: 'Discounts'}}/>
        <Drawer.Screen name="MyProfileDrawer" component={MyProfileStack} options={{title: 'My Account'}}/>
        <Drawer.Screen name="SettingsDrawer" component={SettingStack} options={{title: 'Settings'}}/>
        <Drawer.Screen name="TermsOfUseDrawer" component={TermsOfUseStack} options={{title: 'Terms of Use'}}/>
        <Drawer.Screen name="PrivacyDrawer" component={PrivacyStack} options={{title: 'Privacy'}}/>
      </Drawer.Navigator>
    )
  }

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
        <BottomTab.Screen name="Home" component={LeftDrawer}/>
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
