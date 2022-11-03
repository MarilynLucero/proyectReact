import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../../components/basededatos/basededatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {db} from "../../utils/firebase";
import {doc,getDoc} from "firebase/firestore";


export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [itemProduct, setItemProduct] = useState({});

    useEffect(()=>{
        const getProducto = async()=>{

            //creamos la referencia del documento que vamos a consultar
            const queryRef = doc(db,"items",id);
            //hacemos la consulta
            const response = await getDoc(queryRef);
            console.log(response)
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            // console.log(newDoc)
            setItemProduct(newDoc)
        }
        getProducto();
    },[id])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={itemProduct}/>
        </div>
    )
}