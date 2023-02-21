import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextProvider from "./context/contextprovider";
function App() {
  return (
    <ContextProvider>
      <div className="App container-fluid">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/cart" component={ShoppingCartPage} />
          </Switch>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
