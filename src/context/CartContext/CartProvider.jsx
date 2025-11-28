import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verifica si el producto ya existe
  const exists = (id) => {
    return cart.some((p) => p.id === id);
  };

  // Agregar item (con lógica de acumular cantidad)
  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      alert(`Se actualizó la cantidad de ${item.name}`);
    } else {
      setCart([...cart, item]);
      alert(`${item.name} agregado al carrito`);
    }
  };

  // Eliminar un item específico
  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
  };

  // Vaciar todo
  const clearCart = () => {
    setCart([]);
  };

  // Cantidad total de productos (burbuja del ícono)
  const getTotalItems = () => {
    return cart.reduce((acc, p) => acc + p.quantity, 0);
  };

  // Precio total a pagar
  const total = () => {
    const totalCalc = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    // Redondeo a 2 decimales si fuera necesario
    return Math.round(totalCalc * 100) / 100;
  };

  const checkout = () => {
    const ok = confirm("¿Seguro que quiere finalizar la compra?");
    if (ok) {
      alert("¡Compra realizada con éxito!");
      clearCart();
    }
  };

  const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
    deleteItem,
    total,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};