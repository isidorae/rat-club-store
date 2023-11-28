import { Link, useParams } from 'react-router-dom';
import ProductsPage from '../components/tienda/ProductsPage';

export default function ProductCollection() {

    const { productCollection } = useParams()

    return(
        <>
        <div className="product-collection-container">
        <div className="breadcrumb">
            <nav>
                <Link as={Link} to="/">inicio / </Link>
                <Link as={Link} to="/store">colecciones / </Link>
                <Link as={Link} to={`/store/${productCollection}`}>{productCollection}</Link>
            </nav>
        </div>
            <h1 className="text-center pt-3">{productCollection}</h1>
            <ProductsPage
            productCollection={productCollection}
            />
        </div>
        </>
    )

}