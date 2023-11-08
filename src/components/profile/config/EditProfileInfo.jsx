import '../myprofile.css'
import { useState, useContext } from 'react'
import AuthContext from '../../../context/AuthContext';
import UpdateProfileInfoBtns from './UpdateProfileInfoBtns';
import EditProfileBtn from './EditProfileBtn';

export default function EditProfileInfo() {

  const { loggedUser, updateSuccess, updateErrorMsg, updateUserData, updateUserPass, updateUserEmail, userID } = useContext(AuthContext);
  const { firstName: userName, lastName: userLastName, email: userEmail } = loggedUser

  //**************** input values */
  const [name, setName] = useState(userName);
  const [lastName, setLastName] = useState(userLastName);
  const [email, setEmail] = useState(userEmail)
  const [password, setPassword] = useState("")

  //**************** edit format */
  const [ editingName, setEditingName ] = useState(false)
  const [ editingLastName, setEditingLastName ] = useState(false)
  const [ editingEmail, setEditingEmail ] = useState(false)
  const [ editingPassword, setEditingPassword ] = useState(false)

   //***************** buttons/inputs display  */
  const displayEditFormat = (e, setSomething) => {
    e.preventDefault()
    setSomething(true)
  }

  const hideEditFormat = (setEditingX, setValue, value) => {
    setEditingX(false)
    setValue(value)
  }
  
    //***************** pass data to backend */
    const sendDataToUpdate = (id, userData, token) => {
        updateUserData(id, userData, token)
    }

    const sendEmailToUpdate = (id, userEmail, token) => {
        updateUserEmail(id, userEmail, token)
        
    }

    const sendPassToUpdate = (id, userPass, token) => {
        updateUserPass(id, userPass, token)
    }

    return(
        <>
        <section className="ms-4 ">
          <div className="">
            <h2>Actualizar Datos</h2>
          </div>
        </section>
        <section className="ms-4 text-center">
          <div className="d-flex flex-column">
            {updateSuccess &&  <p className="update-success-msg">Dato actualizado con exito!</p> }
            {updateErrorMsg ? updateErrorMsg.map((err, i) => {
              return  <p key={i} className="update-error-msg">{err}</p>
            }) : null}
            {/* NAME */}
            <div className="py-2 d-flex flex-row border-top">
              <div className="mb-0 ms-3 user-profile-data d-flex flex-row justify-content-between align-items-center">
              {!editingName && 
              <EditProfileBtn
              displayEditFormat={displayEditFormat}
              setEditingX={setEditingName}
              value={"Nombre"}
              />
              }
              {editingName && 
              <>
              <UpdateProfileInfoBtns
              type={"text"}
              hideEditFormat={hideEditFormat}
              setEditingValue={setEditingName}
              currentValue={name}
              setValue={setName}
              userValue={userName}
              ID={userID}
              sendDataToUpdate={sendDataToUpdate}
              serverKey={"firstName"}
              displayEditFormat={displayEditFormat}
              errorMsg={updateErrorMsg}
              />
              </>
              }
              </div>
            </div>
            {/* NAME */}
            {/* APELIDO */}
              <div className="py-2 d-flex flex-row border-top">
              <div className="mb-0 ms-3 user-profile-data d-flex flex-row align-items-center">
              {!editingLastName && 
              <EditProfileBtn
              displayEditFormat={displayEditFormat}
              setEditingX={setEditingLastName}
              value={"Apellido"}
              />
              }
              {editingLastName && 
              <>
              <UpdateProfileInfoBtns
              type={"text"}
              hideEditFormat={hideEditFormat}
              setEditingValue={setEditingLastName}
              currentValue={lastName}
              setValue={setLastName}
              userValue={userLastName}
              ID={userID}
              sendDataToUpdate={sendDataToUpdate}
              serverKey={"lastName"}
              />
              </>
              }
              </div>
            </div>
            {/* NAME */}
            {/* EMAIL */}
            <div className="py-2 d-flex flex-row border-top">
              <div className="mb-0 ms-3 user-profile-data d-flex flex-row align-items-center">
              {!editingEmail && 
              <EditProfileBtn
              displayEditFormat={displayEditFormat}
              setEditingX={setEditingEmail}
              value={"Email"}
              />
              }
              {editingEmail && 
              <>
              <UpdateProfileInfoBtns
              type={"email"}
              hideEditFormat={hideEditFormat}
              setEditingValue={setEditingEmail}
              currentValue={email}
              setValue={setEmail}
              userValue={userEmail}
              ID={userID}
              sendDataToUpdate={sendEmailToUpdate}
              serverKey={"email"}
              />
              </>
              }
              </div>
            </div>
            {/* EMAIL */}
             {/* PASSWORD */}
             <div className="py-2 d-flex flex-row border-top border-bottom">
              <div className="mb-0 ms-3 user-profile-data d-flex flex-row align-items-center">
              {!editingPassword && 
              <EditProfileBtn
              displayEditFormat={displayEditFormat}
              setEditingX={setEditingPassword}
              value={"Contraseña"}
              />
              }
              {editingPassword && 
              <>
              <UpdateProfileInfoBtns
              type={"password"}
              hideEditFormat={hideEditFormat}
              setEditingValue={setEditingPassword}
              currentValue={password}
              setValue={setPassword}
              userValue={""}
              ID={userID}
              sendDataToUpdate={sendPassToUpdate}
              serverKey={"password"}
              />
              </>
              }
              </div>
            </div>
            {/* PASSWORD */}
          </div>
        </section>
      </>
    )
}