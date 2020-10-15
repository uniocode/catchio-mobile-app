import Clothing from '../dummydata/Clothing'
import {ADD_COUPON} from './action'

const initialState = {
    acceptedCoupons: [{id: 12, name: 'Tiffany'}, {id: 23, name: 'Zara'}],
    Clothing: Clothing
}

const acceptCouponsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUPON:
            const addedCoupon = Clothing.filter(discount => discount.id === action.data.id)
            return [...state, state.acceptedCoupons.concat(addedCoupon)]
    }

    return state
} 

export default acceptCouponsReducer