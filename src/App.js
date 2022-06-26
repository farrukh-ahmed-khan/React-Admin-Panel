import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { productInputs, userInputs } from './Formsource';
import "./style/dark.scss";
import { useContext } from 'react';
import { darkModeContext } from './Context/darkModeContext';

function App() {
  const {darkMode} = useContext(darkModeContext);
  return (
    <div className={darkMode? "app dark": "dark"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userID" element={<Single />}></Route>
              <Route path="new" element={<New inputs={userInputs} title="Add new User"/>}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productID" element={<Single />}></Route>
              <Route path="new" element={<New inputs={productInputs} title="Add new Product"/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
