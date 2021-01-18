export const initState = {
    basket:[],
    user:null
}

const  reducer = (state,action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            // logic for adding items to Basket
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from Basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >= 0) {
                // item exists in basket, remove it
                newBasket.splice(index, 1)
            } 
            else {
                console.warn(`cant remove product`)
            }
            return {
                ...state,
                basket:newBasket
            }
            break;
        default:
           return state;
    }
}

export default reducer