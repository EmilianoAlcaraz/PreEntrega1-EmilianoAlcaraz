import { useState, useEffect } from "react"
import ItemCard from "../ItemCard/ItemCard"
import "../ItemListContainer.css"
import { useParams } from "react-router-dom"


const ItemListContaner = () =>{

    const [products, setProducts] = useState([])
    const {idCategory} = useParams()
    const [productsSelected, setProductsSelected] = useState([])

    useEffect(()=>{
        getData()
        .then((res) => setProducts(res))
    }, [])

    useEffect(() => {
        idCategory != undefined ? 
        
        setProductsSelected(products.filter((products) => products.category === idCategory))
        :
        setProductsSelected(products)


        console.log(productsSelected)
    }, [idCategory, products])

    return(
        <div className="contanerCard">
            {productsSelected.map((prod) =>{
                return(
                    <ItemCard key = {prod.id} producto = {prod}/>
                )
            })}
        </div>
    )
}

export default ItemListContaner