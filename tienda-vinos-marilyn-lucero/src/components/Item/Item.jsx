import './Item.css'
import {Link} from "react-router-dom";


export const Item = ({item}) =>{
    return(
        <div className="tarjeta-producto">
            <img src={item.pictureURL} alt={item.nombre} />
            <h4>{item.nombre}</h4>
            <p>{item.precio}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    )
}