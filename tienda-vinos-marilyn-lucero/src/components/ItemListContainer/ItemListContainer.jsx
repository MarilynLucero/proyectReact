import {useEffect, useState} from "react";
import "./ItemListContainer.css"
import {ItemList} from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {db} from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = ()=>{
    console.log(useParams());
    const {categoryId} = useParams();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

   

    useEffect(()=>{
        
        const queryRef = categoryId ? query(collection(db,"items"), where("category","==",categoryId)) : collection(db,"items");
        getDocs(queryRef).then((response)=>{
            const results = response.docs;
            const docs = results.map(doc=>{
                return{
                    ...doc.data(),
                    id:doc.id
                }
            });
            // console.log(docs);
            setProductos(docs);
            setLoading(false);
        });
    },[categoryId])

    // console.log("productos", productos);
    return(
        <div className="item-list-container">
            <p>item list container</p>
            {
                loading ?
                <p>cargando</p>
                :
                <ItemList items={productos} otraPropiedad={123}/>
            }
        </div>
    )
}