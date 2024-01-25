import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import AddPage from "./pages/addpage";
import Detail from "./pages/detail";
import Basket from "./pages/basket";
import Wishlist from "./pages/wishlist";
import Admin from "./pages/admin";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/addpage" element={<AddPage />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/product/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
