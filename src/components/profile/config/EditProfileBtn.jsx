export default function EditProfileBtn({displayEditFormat, setEditingX, value}) {

  return (
    <>
      <p className="mb-0 me-2 ">{value}</p>
      <button
        onClick={(e) => displayEditFormat(e, setEditingX)}
        className="edit-user-data-btn"
      >
        <i>editar</i>
      </button>
    </>
  );
}
