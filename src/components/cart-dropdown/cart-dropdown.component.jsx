import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate =  useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return(
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ?
                (cartItems.map((item) => (
                <CartItem key={item.id} CartItem={item}/>
                ))) : (
                    <EmptyMessage>No Items :( </EmptyMessage>
                )
            }
             </CartItems>
            <Button onClick={goToCheckoutHandler}>Check Out</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;