import '../ItemDetailContainer.css'


function ItemDetailsContaner({ productSelected }) {
    return (
        <div className='itemDetailsContaner'>
            <img src={productSelected.img} alt={productSelected.id} />
            <h1>{productSelected.id}</h1>
            <h2>${productSelected.precio}</h2>
            <p>{productSelected.descripcion}</p>
        </div>
    );
}

export default ItemDetailsContaner;