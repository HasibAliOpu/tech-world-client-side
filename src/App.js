import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:inventoryId" element={<ItemDetail />} />
        <Route path="/manageInventory" element={<ManageInventory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
