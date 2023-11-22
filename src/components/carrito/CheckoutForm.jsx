import { useState } from 'react'
import { regiones } from '../../context/regiones.json'

export default function CheckoutForm({sendDeliveryData, error, setError}) {

    const[name, setName] = useState("")
    const[apellido, setApellido] = useState("")
    const[region, setRegion] = useState("")
    const[comuna, setComuna] = useState("")
    const[address, setAddress] = useState("")
    const[extra, setExtra] = useState("")


    const submitDeliveryData = (e) => {

        e.preventDefault()

        const data = {
            nombre: name,
            apellido: apellido,
            region: region,
            comuna: comuna,
            direccion: address,
            extra: extra
        }
        sendDeliveryData(data)
    }

    return(
        <>
        {error && error.map(err => {
            console.log(err)
            return  <p className="err-msg"><i>{err}</i></p>
        })
        }
        <form onSubmit={(e) => submitDeliveryData(e)} className="d-flex flex-column">

          <label>*Nombre </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>*Apellido</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <label>*Región</label>
          <select name="region" id="region" onChange={(e) => setRegion(e.target.value)}>
            <option>--Seleccionar Región--</option>
            {regiones.map((reg, i) => {
                return <option key={i} value={reg}>{reg}</option>
            })}
          </select>
          <label>*Comuna</label>
          <input type="text" value={comuna} onChange={(e) => setComuna(e.target.value)} />
          <label>*Dirección</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
          <label>Depto / Condominio / Extra</label>
          <input type="text"  value={extra} onChange={(e) => setExtra(e.target.value)}/>
          <button className="my-2 checkout-page-btn">Realizar Compra</button>
        </form>
        </>
    )
}