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
  acceptedCoupons: [
    {
      id: 1,
      name: 'ZARA',
      category: 'Winter Collection',
      percent: 20,
      validUntil: '20/07/2020',
      imgUrl: 'https://picsum.photos/500/500',
    },

    {
      id: 2,
      name: 'H&M',
      category: 'Denim Collection',
      percent: 35,
      validUntil: '13/09/2020',
      imgUrl: 'https://picsum.photos/500/500',
    },

    {
      id: 3,
      name: 'ARMANI',
      category: 'All Accessories',
      percent: 20,
      validUntil: '13/09/2020',
      imgUrl: 'https://picsum.photos/500/500',
    },
  ],
  usedDiscounts: [],
};

const acceptCouponsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLUETOOTH:
      if (!state.bluetoothStatus) {
        // set bluetooth on
        state.bluetoothStatus = true;
        state.newCouponActive = true; // temporary just to test
      } else {
        // set bluetooth off
        state.bluetoothStatus = false;
        state.newCouponActive = false; // temporary just to test
      }
      return state;

    case LOG_IN:
      if (state.loggedIn === false) {
        state.loggedIn = true;
      } else if (state.loggedIn === true) {
        state.loggedIn = false;
      }

      return state;

    case SAVE_COUPON:
      const id = action.data.id;
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
