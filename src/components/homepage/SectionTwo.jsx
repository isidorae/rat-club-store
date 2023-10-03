import './sectiontwo.css'

export default function SectionTwo({text, img, alt}) {

    return(
        <section>
                <div className="section-two-homepage d-flex flex-row align-items-center flex-wrap p-4">
                    <p>{text}</p>
                    <img className="rat-love-img" src={img} alt={alt} />
                </div>
            </section>

    )


}