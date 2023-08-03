import React, { createContext, useContext, useReducer } from 'react'

const CartState =createContext();
const CartDispatch = createContext();
const reducer = (state,action)=>{
switch (action.type) {
    case "ADD":
        return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]

    default:
        console.log("Error");
        break;
}
}

export const CartProvider = ({children})=>{

    const [state,dispatch]= useReducer(reducer,[])
    return(
<CartDispatch.Provider value={dispatch}>
    <CartState.Provider value={state}>
        {children}
    </CartState.Provider>
</CartDispatch.Provider>
    )
}

export const useCart = ()=> useContext(CartState)
export const useDispatch =()=> useContext(CartDispatch)