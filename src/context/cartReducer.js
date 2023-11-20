import { ACTIONS } from "./cartActions";

export const cartInitialState = {
    cart: []
}

export function cartReducer(state, action){
    switch(action.type){
        case ACTIONS.ADD_TO_CART: {
        // evitar añadir duplicados
        for (let i = 0; i < state.cart.length; i++) {
            if (action.payload.name === state.cart[i].name){
                alert("Producto ya esta en el carrito")
                return state; 
            }
        }

       return {
        ...state,
        cart: [...state.cart, {...action.payload, quantity: 1}]
       }
        }
        case ACTIONS.ADD_ONE_QUANTITY: {
            console.log(action.payload)
            const addItemQuant = state.cart.map(item => {
                return action.payload._id === item._id
                ? {...item, quantity: action.payload.quantity + 1}
                : item
            })
            return {
                ...state,
                cart: addItemQuant
            }
        }
        case ACTIONS.REDUCE_ONE_QUANTITY: {
            if(action.payload.quantity < 2) {
                return state;
            }

            const reduceItemQuant = state.cart.map(item => {
                return action.payload._id === item._id
                ? {...item, quantity: action.payload.quantity - 1}
                : item
            })

            return {
                ...state,
                cart: reduceItemQuant
            }
        }
        case ACTIONS.REMOVE_ITEM_FROM_CART: {
            const newCart = state.cart.filter(item => action.payload != item._id)
            return {
                ...state,
                cart: newCart
            };
        }
        case ACTIONS.CLEAR_CART: {
            return cartInitialState;
        }
        default: {
            return state.cart;
        }
    }
}