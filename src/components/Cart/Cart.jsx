import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item"; 
import "./Cart.css"; 

export const Cart = () => {
  const { cart, clearCart, deleteItem, total, checkout } = useCartContext();

  return (
    <section className="item-list-container">
      <h2>Carrito de compras</h2>

      {cart.length ? (
        cart.map((prod) => (
          <div key={prod.id} style={{border: '1px solid white', margin: '10px', padding: '10px'}}>
             <h3>{prod.name}</h3>
             <img src={prod.imageUrl} alt={prod.name} style={{width:'100px'}}/>
             <p>Precio unitario: ${prod.price}</p>
             <p>Cantidad: {prod.quantity}</p>
             <p>Subtotal: ${prod.price * prod.quantity}</p>
             <button className="btn" onClick={() => deleteItem(prod.id)}>
              Eliminar
            </button>
          </div>
        ))
      ) : (
        <div>
            <p>Tu carrito está vacío</p>
            <Link className="btn" to="/">Volver al inicio</Link>
        </div>
      )}

      {cart.length > 0 && (
        <div className="btn-container">
          <div className="total-pagar">
            <p style={{fontSize: '1.5rem', fontWeight:'bold'}}>Total a pagar: ${total()}</p>
          </div>
          <button className="btn" onClick={checkout}>Finalizar compra</button>
          <button className="btn" onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </section>
  );
};