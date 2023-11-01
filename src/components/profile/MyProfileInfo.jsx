import { useState, useEffect } from 'react'

export default function MyProfileInfo({user}) {
  
  // const {username, nombre, apellido, email } = user
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    isUserLoaded()
  }, [])

  const isUserLoaded = () => {
    if (user || user == null) {
      setLoading(false)
      return;
    } 
    if (!user) {
      setLoading(true)
    }
  }

  return (
    <>
      <section className="ms-4 mt-5 align-self-start">
        <div className="">
          <h2>Información Básica</h2>
        </div>
      </section>
      {loading
      ? "loading..."
      : <section className="ms-4 align-self-start">
        <div className="d-flex flex-column">
         <div className="py-2 d-flex flex-row border-top">
            <p className="mb-0 ">Username</p>
            <p className="mb-0 ms-3 user-profile-data">
              <i>{user ? user.username : "undefined"}</i>
            </p>
          </div>
          <div className="py-2 d-flex flex-row border-top">
            <p className="mb-0 ">Nombre</p>
            <p className="mb-0 ms-3 user-profile-data">
              <i>{user ? user.nombre : "undefined"}</i>
            </p>
          </div>
          <div className="py-2 d-flex flex-row border-top">
            <p className="mb-0">Apellido</p>
            <p className="mb-0 ms-3 user-profile-data">
              <i>{user ? user.apellido : "undefined"}</i>
            </p>
          </div>
          <div className="py-2 d-flex flex-row border-top border-bottom">
            <p className="mb-0">Email</p>
            <p className="mb-0 ms-3 user-profile-data">
              <i>{user ? user.email : "undefined"}</i>
            </p>
          </div>
        </div>
      </section>}
      
    </>
  );
}
