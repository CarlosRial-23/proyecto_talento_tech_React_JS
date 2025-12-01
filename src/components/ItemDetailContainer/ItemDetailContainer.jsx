import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    
    getProductById(id)
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
      });
  }, [id]);

  return (
    <main>
      {detail ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </main>
  );
};