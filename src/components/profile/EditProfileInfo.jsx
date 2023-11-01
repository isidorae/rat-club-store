import './myprofile.css'

export default function EditProfileInfo() {

    return(
        <>
        <section className="ms-4 ">
          <div className="">
            <h2>Actualizar Datos</h2>
          </div>
        </section>
        <section className="ms-4 text-center">
          <div className="d-flex flex-column">
           <div className="py-2 d-flex flex-row border-top">
              <p className="mb-0 ">Username</p>
              <p className="mb-0 ms-3 user-profile-data">
                <button className="edit-user-data-btn"><i>editar</i></button>
              </p>
            </div>
            <div className="py-2 d-flex flex-row border-top">
              <p className="mb-0 ">Nombre</p>
              <p className="mb-0 ms-3 user-profile-data">
              <button className="edit-user-data-btn"><i>editar</i></button>
              </p>
            </div>
            <div className="py-2 d-flex flex-row border-top">
              <p className="mb-0">Apellido</p>
              <p className="mb-0 ms-3 user-profile-data">
              <button className="edit-user-data-btn"><i>editar</i></button>
              </p>
            </div>
            <div className="py-2 d-flex flex-row border-top border-bottom">
              <p className="mb-0">Email</p>
              <p className="mb-0 ms-3 user-profile-data">
              <button className="edit-user-data-btn"><i>editar</i></button>
              </p>
            </div>
            <div className="py-2 d-flex flex-row  border-bottom">
              <p className="mb-0">Password</p>
              <p className="mb-0 ms-3 user-profile-data">
              <button className="edit-user-data-btn"><i>editar</i></button>
              </p>
            </div>
          </div>
        </section>
      </>
    )
}