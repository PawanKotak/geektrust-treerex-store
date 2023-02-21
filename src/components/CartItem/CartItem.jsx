const CartItem = ({ item, handlerQuntity, handlerDelete }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div key={item.id} className="row " role="contentinfo">
      <div className="col-1 col-md-3"></div>
      <div className="col-10 col-md-6 card mb-3">
        <div className="row">
          <div className="col-4 col-sm-3">
            <img
              className="card-img-top "
              src={item.imageURL}
              alt="Card image cap"
            ></img>
          </div>
          <div className="col-8 col-sm-6 fw-bold  ">
            <div className="row d-flex align-items-center h-100">
              <div className=" col-6 text-start">
                <div>{item.name}</div>
                <div>{`${item.currency} ${item.price}`}</div>
              </div>
              <div className=" col-6 ">
                <select
                  value={item.cartqty}
                  className="ps-2"
                  onChange={(e) => handlerQuntity(e, item)}
                  title="quantity"
                >
                  {options.map((optionItem) => {
                    return (
                      <option
                        key={`option-${optionItem}`}
                        value={optionItem}
                        disabled={optionItem > item.quantity}
                      >{`Qty:${optionItem}`}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 d-flex align-items-center justify-content-center p-2">
            <button
              onClick={() => handlerDelete(item)}
              className="rounded-1 border"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="col-1 col-md-3"></div>
    </div>
  );
};

export default CartItem;
