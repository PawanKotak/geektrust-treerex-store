import { dataContext } from "../../context/context";
import { useContext, useState } from "react";
const Product = ({ data: product, handlerAdd, handlerQuntity }) => {
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div
      key={product.id}
      className="col-12 col-md-6 col-lg-4  d-inline-block p-4"
      title="product"
    >
      <div className="card rounded-0 shadow-lg">
        <div className="card-body position-relative">
          <h5 className="card-title text-start">{product.name}</h5>
          <img
            className="card-img-top"
            src={product.imageURL}
            alt="Card image cap"
          ></img>

          <div className="mt-2">
            <span
              title="price"
              className="text-start"
            >{`${product?.currency} ${product?.price}`}</span>
            {product?.cart === true ? (
              // <input
              //   type="number"
              //   id={`quantity-${product.id}`}
              //   name="quantity"
              //   title="quantity"
              //   min="0"
              //   max={product.quantity}
              //   value={product.cartqty}
              //   onChange={(e) => handlerQuntity(e, product)}
              // ></input>

              <select
                value={product.cartqty}
                className="ps-2 ms-2"
                onChange={(e) => handlerQuntity(e, product)}
                title="quantity"
                id={`quantity-${product.id}`}
              >
                {options.map((optionItem) => {
                  return (
                    <option
                      key={`option-${optionItem}`}
                      value={optionItem}
                      disabled={optionItem > product.quantity}
                    >{`${optionItem}`}</option>
                  );
                })}
              </select>
            ) : (
              <button
                className="btn btn-dark rounded-0 float-end"
                onClick={() => handlerAdd(product)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
