import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget =()=>{
    const {getTotalProducts} =useContext(CartContext);
    return(
        <div className="logo">
            <FontAwesomeIcon icon={faCartShopping}/>
            <span>{getTotalProducts()}</span>
        </div>
    )
}