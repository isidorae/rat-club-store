import './homepage.css'
import HeroImg from './HeroImg'
import SectionTwo from './SectionTwo'
import HomeCollection from './HomeCollection'
import ratLoveImg from '/public/homepage-imgs/ratloveimg.png'

export default function HomePage() {

    return(
        <>
               <HeroImg/>
               <SectionTwo
               text='Amamos las ratas por sobre todas las cosas!
               Este lugar esta dedicado exclusivamente para ell@s!
               Para mejorar su calidad de vida a través de los
               mejores alimentos, juguetes que no soltarán, objetos
               para que descansen de forma cómoda y accesorios que nunca estan
               demas.'
               img={ratLoveImg}
               alt="rata rat-love frutilla"
               />
               <HomeCollection/>
        </>
    )


}