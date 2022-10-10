import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <NavBar/>
        {/* <ItemListContainer greeting="Vinos y mas"/> */}
        <Routes>
          <Route path="/inicio" element={<ItemListContainer/>}/>
          <Route path="/category/category:id" element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
