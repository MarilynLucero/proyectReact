import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import swal from 'sweetalert2';
import "./CartContainer.css"

export const CartContainer = () => {
    const value = useContext(CartContext);
    const { productosCarrito, getTotalPrice, getTotalProducts, removeItem, removeAll } = value;
    const [compraId, setCompraId] = useState("");
    const sendOrder = (evt) => {
        evt.preventDefault();
        const compra = {
            buyer: {
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value
            },
            items: productosCarrito,
            total: getTotalPrice()
        };

        //crear la referencia de donde voy a guardar la informacion en la base de datos.
        const queryRef = collection(db, "orders");
        //agregar la informacion
        addDoc(queryRef, compra).then((resultado) => {
            setCompraId(resultado.id);
        })
    };

    const showAlert = () => {
        swal.fire({
            title: "WineryML",
            text: "Tu compra fue registrada bajo el numero de orden: " + compraId,
            type: "success"

        }).then(function () {
            window.location = "/"
        });
    }

    const updateProduct = () => {
        //creamos la referencia del documento que vamos a actualizar
        const queryRef = doc(db, "items", "HfIz8PlCwnXt5pws8g9b");
        //actualizamos el documento
        updateDoc(queryRef, { price: 120 }).then(() => console.log("actualizado correctamente")).catch((error) => console.log("hubo un error"))
    }

    if (productosCarrito.length === 0) {
        return (
            <>
                <p>No hay productos en el carrito</p>
                <Link to="/">Revisá nuestros productos acá</Link>
            </>
        );
    }
    return (
        <div>
            <p>pagina del carrito</p>
            {compraId && showAlert()}
            <div className="infCart" style={{ width: "500px" }}>
                {
                    productosCarrito.map((producto) => (
                        <div style={{ padding: "30px", border: "1px solid black" }}>
                            <h3>{producto.name}</h3>
                            <p>Precio por unidad: ${producto.price}</p>
                            <p>Cantidad: {producto.quantity}</p>
                            <p>Precio por cantidad: ${producto.quantityPrice}</p>
                            <button onClick={() => removeItem(producto.id)}>Eliminar</button>
                        </div>
                    ))
                }
                <div className='vaciar'>
                    <button onClick={() => removeAll()}>Vaciar</button>
                </div>
                <p><strong>Precio total: </strong> ${getTotalPrice()}</p>
                <p><strong>Total de productos: </strong> {getTotalProducts()}</p>
                <form className="formBox" onSubmit={sendOrder}>
                    <label>Nombre</label>
                    <input type="text" required pattern="[a-z A-ZñÑáéíóúÁÉÍÓÚ\s]{1,}" placeholder="Nombre" />
                    <label>Telefono</label>
                    <input id="num" type="number" required placeholder="Telefono" />
                    <label>Correo</label>
                    <input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Ingrese su correo" />
                    <button type="submit">Enviar orden</button>
                </form>
            </div>
            <button onClick={updateProduct}>Actualizar producto</button>
        </div>


    )
}
