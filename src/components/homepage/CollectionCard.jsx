import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

export default function CollectionCard({as, path, className, msg }) {


    return (
        <>
        <Col className="d-flex justify-content-center">
            <Link as={as} to={path}>
               <div className={`${className} home-collection-grid-img`}>
                   <div className="opacity-bg-collection">
                      <h3 className="title-collect text-center">{msg}</h3>
                   </div>
               </div>
            </Link>
        </Col>
        </>
    )


}