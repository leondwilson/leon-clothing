import { useContext } from 'react';

import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';

import Button from '../../components/button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    )
};

export default CartDropdown;