import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Login from "./pages/Login"
import MainPage from './pages/MainPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={ <Login/>}></Route>
      <Route path="/mainPage" element={<MainPage/>}></Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
