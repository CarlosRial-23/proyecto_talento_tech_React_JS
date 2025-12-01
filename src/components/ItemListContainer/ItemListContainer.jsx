import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../services/products";
import { useParams } from "react-router-dom";

export const ItemListContainer=({titulo})=>{
    const [products, setProducts]=useState([]);
    const {category} = useParams();

    useEffect(()=>{

        getProducts(category).then( (data) => {
            setProducts(data)
        
        }).catch((err)=>{console.log(err)});


    },[category]);   


    return(       
        
        <section>
            <h3>{titulo}</h3>
            <ItemList lista={products}/>
        </section>
    );


};