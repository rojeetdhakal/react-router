import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="ordersummary" element={<OrderSummary />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="product" element={<Product />}>
            <Route path="featured" element={<Featured />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>
          <Route path="user" element={<Users/>}>
          <Route path=":userID" element={<UserDetails/>}></Route>
          <Route path="ffgyadmin" element={<Admin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
