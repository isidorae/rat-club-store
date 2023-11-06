import { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'


export default function UpdateProfileInfoBtns({
  hideEditFormat,
  setEditingValue,
  currentValue,
  setValue,
  userValue,
  ID,
  sendDataToUpdate,
  serverKey,
  type
}) {

  const { token } = useContext(AuthContext);

    const sendValue = (id, newData, token) => {

        sendDataToUpdate(id, {[serverKey]: newData}, token)
        hideEditFormat(setEditingValue, setValue, newData)
    }
    
  return (
    <>
      <input
      value={currentValue}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      className="me-1 ms-0"
      />
      <button
      onClick={() => sendValue(ID, currentValue, token)}
      className="updating-ok-user-data-btn"
      >
      ✅
      </button>
      <button
        onClick={() => hideEditFormat(setEditingValue, setValue, userValue)}
        className="ms-2 updating-cancel-user-data-btn"
      >
        <i>cancelar</i>
      </button>
    </>
  );
}
