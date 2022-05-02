import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddItem from "./Pages/AddItem/AddItem";
import { ToastContainer } from "react-toastify";
import MyItems from "./Pages/MyItems/MyItems";
import Login from "./Login/Login";
import Register from "./Register/Register";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:inventoryId" element={<ItemDetail />} />
        <Route path="/manageInventory" element={<ManageInventory />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/myItem" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
