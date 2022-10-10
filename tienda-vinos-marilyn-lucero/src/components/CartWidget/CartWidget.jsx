import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const CartWidget =()=>{
    return(
        <div className="logo">
        <FontAwesomeIcon icon={faCartShopping}/>
        <span>6</span>
        </div>
    )
}