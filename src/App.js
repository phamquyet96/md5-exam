import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit/:id' element={<Update/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
          {/*<Route path='/delete/:id' element={<Delete/>}></Route>*/}
        </Routes>
      </div>
  );
}

export default App;
