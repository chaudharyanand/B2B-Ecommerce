import React from 'react'
import { clearCart } from "./cart-slice";
import { useDispatch } from 'react-redux';



const Clear = () => {
  const dispatch = useDispatch();
  const remcart = () =>{
    dispatch(clearCart());
}

 return (
  
    <button className='underline text-themecolor' onClick={remcart}> Clear Cart </button>
    
  )
};

export default Clear;