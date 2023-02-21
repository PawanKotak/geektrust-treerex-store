import { HEADER_TITLE } from "../../constants/constants";
import { Link } from "react-router-dom";
import { dataContext } from "../../context/context";
import { useContext } from "react";
const Header = () => {
  const { cartItem } = useContext(dataContext);

  return (
    <header className="row bg-light px-5 py-4 ">
      <div className="col fw-bold text-start">
        <Link to="/" className="mx-3 text-dark text-nowrap">
          {HEADER_TITLE}
        </Link>
      </div>

      <div className="col text-end me-3">
        <nav>
          <Link
            to="/products"
            className="me-5 text-dark d-none d-md-inline-block"
          >
            Products
          </Link>
          <Link to="/cart" className="me-0 me-md-5 text-dark">
            <b>
              <i className="bi bi-cart"></i>

              <sup title="item-count">
                {cartItem.length === 0 ? null : cartItem.length}
              </sup>
            </b>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
