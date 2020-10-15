export const ADD_COUPON = 'ADD_COUPON'


export const addCoupon = ({id}) => {
    return {
        type: ADD_COUPON,
        data: {
            id: id
        }
    }
}