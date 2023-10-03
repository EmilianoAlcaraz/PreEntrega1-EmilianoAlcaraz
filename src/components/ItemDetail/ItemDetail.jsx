
import ItemDetailsContaner from "../components/itemDetailsCotaner/ItemDetailsContaner"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from '../components/Header/Header'

function ItemDetail() {
    const [products, setProducts] = useState([])
    const [productSelect, setProductSelect] = useState({})
    const {id} = useParams()

    const idProductParam = id.toString()

    useEffect(()=>{
        getData()
        .then((res) => setProducts(res))
    }, [])

    useEffect(() => {

        const result = products.find((prod) => prod.id === idProductParam)

        setProductSelect(result)
    }, [idProductParam, products])
    

    return (
        <>
            <Header/>
            <ItemDetailsContaner productSelected = {productSelect}/>
        </>
    )
}

export default ItemDetail