export default function ProfileNavBtns({setUserBtnState, setNutBtnState, setOrdersBtnState, switchProfileSection, hideUnselectedSection}) {

  function switchSelection(e) {

    e.preventDefault()
    console.log(e.target.id)
    if (e.target.id === "user"){
      console.log(e.target.id)
      switchProfileSection(setUserBtnState)
      hideUnselectedSection(setNutBtnState, setOrdersBtnState)
    }
    if (e.target.id === "orders"){
      console.log(e.target.id)
      switchProfileSection(setOrdersBtnState)
      hideUnselectedSection(setUserBtnState, setNutBtnState)
    }
    if (e.target.id === "nut"){
      console.log(e.target.id)
      switchProfileSection(setNutBtnState)
      hideUnselectedSection(setOrdersBtnState, setUserBtnState)
    }


  }

  return (
    <>
      <button onClick={switchSelection} id='user' className="profile-btn myprivateprofile-btn">
        <svg
          onClick={e=> e.stopPropagation()}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </button>
      <button onClick={switchSelection} id='orders' className="profile-btn myorders-btn">
        <svg
        onClick={e=> e.stopPropagation()}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-bag-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
        </svg>
      </button>
      <button onClick={switchSelection} id='nut' className="profile-btn nut-btn">
        <svg
          onClick={e=> e.stopPropagation()}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-nut"
          viewBox="0 0 16 16"
        >
          <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z" />
          <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
        </svg>
      </button>
    </>
  );
}
