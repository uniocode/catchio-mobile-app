export const ADD_COUPON = 'ADD_COUPON'
export const SAVE_COUPON = 'SAVE_COUPON'
export const COUPON_USED = 'COUPON_USED'
export const BLUETOOTH = 'BLUETOOTH'
export const NEW_COUPON_ACTIVE = 'NEW_COUPON_ACTIVE'
export const LOG_IN = 'LOG_IN'

export const addCoupon = ({id}) => {
    return {
        type: ADD_COUPON,
        data: {
            id: id
        }
    }
}

export const toggleBluetooth = () => {
    return {
        type: BLUETOOTH
    }
}