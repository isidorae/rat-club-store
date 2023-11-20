import { useState } from 'react'

export default function CheckoutForm({saveDeliveryData}) {

    const[name, setName] = useState("")
    const[apellido, setApellido] = useState("")
    const[comuna, setComuna] = useState("")
    const[address, setAddress] = useState("")
    const[extra, setExtra] = useState("")

    const deliveryData = {
        nombre: name,
        apellido: apellido,
        comuna: comuna,
        direccion: address,
        extra: extra
    }

    return(
        <>
        <form onSubmit={(e) => saveDeliveryData(e, deliveryData)} className="d-flex flex-column">
          <label>Nombre </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Apellido</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <label>Comuna</label>
          <input type="text" value={comuna} onChange={(e) => setComuna(e.target.value)} />
          <label>Dirección</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
          <label>Depto / Condominio / Extra</label>
          <input type="text"  value={extra} onChange={(e) => setExtra(e.target.value)}/>
          <button className="my-2 checkout-page-btn">Realizar Compra</button>
        </form>
        </>
    )
}