import Clothing from '../dummydata/Clothing'
import {ADD_COUPON, SAVE_COUPON, COUPON_USED, BLUETOOTH} from './action'

const initialState = {
    bluetoothStatus: false,
   currentDiscounts: Clothing,
   savedDiscounts: [],
   usedDiscounts: []
}

const acceptCouponsReducer = (state = initialState, action) => {
    switch (action.type) {
        case BLUETOOTH:
            if (!state.bluetoothStatus){

                // set bluetooth on
                state.bluetoothStatus = true

            } else {
                // set bluetooth off
                state.bluetoothStatus = false
            }
            return state

        case SAVE_COUPON:
            const id = action.data.id
            const addedCoupon = state.currentDiscounts.filter(discount => discount.id === id)
            state.savedDiscounts.push(addedCoupon)
            console.log('here')
            console.log(state.savedDiscounts)
            return state
    }

    return state
} 

export default acceptCouponsReducer