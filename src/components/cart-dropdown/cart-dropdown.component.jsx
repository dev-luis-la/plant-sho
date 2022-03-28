import { useContext } from 'react';

import './cart-dropdown.styles.scss';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
              {cartItems.map((item) => (
                <CartItem key={item.id} CartItem={item}/>))}
            </div>
            <Button>Check Out</Button>
        </div>
    )
}

export default CartDropdown;