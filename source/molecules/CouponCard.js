import React, {useRef} from 'react';
import {Animated, Text, StyleSheet, Image, PanResponder} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Colors from '../../specs/Colors';
import NonScrollContainer from '../atoms/NonScrollContainer';
import {MediumText, BigText} from '../atoms/TextAtoms';
import Button from '../atoms/ButtonAtoms';

const CouponCard = ({name, image, id, percent}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  const exampleCoupon = useSelector(
    (store) => store.mainReducer.acceptedCoupons,
  )[1]; // Example data from the store
  const getStyle = () => {
    return {
      transform: [
        {
          rotate: pan.x.interpolate({
            inputRange: [-500, 0, 500],
            outputRange: ['-120deg', '0deg', '120deg'],
          }),
        },
      ],
    };
  };

  return (
    <Animated.View
      style={{
        ...style.container,
        transform: [{translateX: pan.x}, {translateY: pan.y}],
      }}
      {...panResponder.panHandlers}>
      <NonScrollContainer
        width="300px"
        height="600px"
        position="absolute"
        top="50px"
        zIndex={100}
        justifyContent="space-between"
        style={shadow}>
        <MediumText marginTop="30px" color={Colors.pastelCoral}>
          {exampleCoupon.name}
        </MediumText>
        <Image style={style.image} source={{uri: exampleCoupon.imgUrl}} />
        <BigText color={Colors.pastelCoral}>
          {exampleCoupon.percent + ' %'}
        </BigText>

        <NonScrollContainer
          style={style.bottomView}
          width="100%"
          height="30px"
          flexDirection="row">
          <Button
            width="50%"
            color={Colors.pastelRed}
            round={false}
            title="REJECT"
          />
          <Button
            width="50%"
            color={Colors.pastelGreen}
            round={false}
            title="ACCEPT"
          />
        </NonScrollContainer>
      </NonScrollContainer>
    </Animated.View>
  );
};

const shadow = {
  shadowColor: 'grey',
  shadowOffset: {width: 0, height: 10},
  shadowRadius: 15,
  shadowOpacity: 0.4,
};

const style = StyleSheet.create({
  container: {
    width: 300,
    height: 600,
    zIndex: 30,
    position: 'absolute',
    alignSelf: 'center',
  },
  bottomView: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: Colors.pastelCoral,
  },

  image: {
    width: '80%',
    height: 250,
    borderRadius: 20,
  },
  btnBack: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CouponCard;
