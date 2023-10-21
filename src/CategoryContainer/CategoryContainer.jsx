import { Link } from 'react-router-dom'
import './CategoryContaner.css'

function CategoryContaner() {

    return (
        <div className='itemListContaner'>

            <li className="contaner">
                <Link to={'/'}>Todo</Link>
                <Link to={'/category/Termos'}>Termos</Link>
                <Link to={'/category/Mates'}>Mates</Link>
                <Link to={'/category/Materas'}>Materas</Link>
                <Link to={'/category/Bombilla'}>Bombilla</Link>
                <Link to={'/category/Hierba'}>Hierba</Link>
            </li>
        </div>
    )
}

export default CategoryContaner