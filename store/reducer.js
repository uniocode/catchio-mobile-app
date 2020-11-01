import Clothing from '../dummydata/Clothing';
import {
  ADD_COUPON,
  SAVE_COUPON,
  COUPON_USED,
  BLUETOOTH,
  LOG_IN,
  NEW_COUPON_ACTIVE,
  SIGN_UP,
} from './action';

const initialState = {
  bluetoothStatus: false,
  newCouponActive: false,
  loggedIn: false,
  currentDiscounts: Clothing,
  acceptedCoupons: [],
  usedDiscounts: [],
};

const acceptCouponsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      if (state.loggedIn === false) {
        state.loggedIn = true;
      } else if (state.loggedIn === true) {
        state.loggedIn = false;
      }

      return state;

    case SAVE_COUPON:
      console.log('working');
      console.log(state.acceptedCoupons);
      const id = action.data;
      const addedCoupon = state.currentDiscounts.filter(
        (discount) => discount.id === id,
      );

      state.acceptedCoupons.push(addedCoupon);
      return state;

    case NEW_COUPON_ACTIVE:
      if (state.newCouponActive === true) {
        state.newCouponActive = false;
      } else {
        state.newCouponActive = true;
      }
      return state;
  }

  return state;
};

export default acceptCouponsReducer;
