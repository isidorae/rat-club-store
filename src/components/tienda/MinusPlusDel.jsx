

export default function MinusPlusDel({quantity}) {
  return (
    <>
      <div className="d-flex flex-row align-items-cente justify-content-center">
        <div className=" d-flex flex-row align-items-center justify-content-center">
          <button className="btn-item-plus">+</button>
          <div className="plus-minus-container fw-bold">
            <span>{quantity}</span>
          </div>
          <button className="btn-item-minus">-</button>
        </div>
        <div className="">
          <button className="btn-item-remove" variant="danger">
            x
          </button>
        </div>
      </div>
    </>
  );
}
