import Home from "./Component/Home";
import Product from "./Component/Product";
import AddProduct from "./Component/AddProduct";
import NotFound from "./Component/NotFound";
import Contact from "./Component/Contact";
import TalkToUs from "./Component/TalkToUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./services/Context";
import { useState } from "react";
import ProudctDetails from "./Component/ProudctDetails";

function App() {


   const [teacher,setTeacher] = useState(null);


  return (
    <div>
      <Context.Provider  value={{teacher,setTeacher}}>
        <BrowserRouter location="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/talk-to-us" element={<TalkToUs />} />
            <Route path = '/details' element={<ProudctDetails/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
