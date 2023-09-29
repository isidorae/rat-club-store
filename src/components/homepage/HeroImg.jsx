import './heroimg.css'
import { Link } from 'react-router-dom'

export default function HeroImg() {


    return (
        <>
        <main>
        <div className="heroimg-container">
            <div className="heroimg-opacity-layer d-flex align-items-center">
                <div className="heroimg-content">
                    <section className="d-flex flex-column align-items-center p-5">
                    <h1 className='heroimg-title text-center'>Un lugar dedicado exclusivamente a tus pequeños hij@s rata!</h1>
                    <Link as={ Link } to='/store' ><button className="heroimg-btn">Ver Collección</button></Link>
                    </section>
                </div>
            </div>
        </div>
        </main>
        </>
    )


}