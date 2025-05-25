import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pagina principal
import Home from "./components/pages/Home/Home.jsx";

//login
import Login from "./components/pages/income/login/Login.jsx";

//register
import Register from "./components/pages/income/register/Register.jsx";

//tienda de productos
import Shop from "./components/pages/shop/Shop.jsx";

//carrito con localstorage para que se guarde lo elegido
import CartHeader from "./components/pages/cart/cartHeader/CartHeader.jsx";

//para mandar un email
import ContactForm from "./components/pages/contact/ContactForm.jsx";

//esto es para mandar el mensaje
import FinishCart from "./components/pages/cart/finishCart/FinishCart.jsx";

//la lista de tareas
import TodoList from "./components/pages/todoList/TodoList.jsx";

//crud
import ProductList from "./components/pages/addProducts/addProductsList.jsx";

//protected ProductList
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.jsx'

//conocenos
import Conocenos from "./components/pages/conocenos/Conocenos.jsx";

//ordenes guardadas
import MyOrders from "./components/pages/cart/myOrders/MyOrders.jsx";

//mostras pedidos
import Orders from './components/pages/OrdersClients/Orders.jsx'


//css
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cart" element={<CartHeader />} />
          <Route path="/finish" element={<FinishCart />} />
          <Route path="/pedidos" element={<Orders />} />
          <Route
            path="/addProducts"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
