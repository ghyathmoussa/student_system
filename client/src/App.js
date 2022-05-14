import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Login from "./pages/Login"
import MainPage from './pages/MainPage';
import StudentSignUp from "./pages/StudentSignUp";
import ListStudents from "./pages/ListStudents";
import DeleteStudent from "./pages/DeleteStudent";
import EnrollForCourse from "./pages/Student-Course"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={ <Login/>}></Route>
      <Route path="/mainPage" element={<MainPage/>}></Route>
      <Route path="/studentSignUp" element={<StudentSignUp/>}></Route>
      <Route path="/listStudents" element={<ListStudents/>}></Route>
      <Route path="/deleteStudent" element={<DeleteStudent/>}></Route>
      <Route path='/enrollForCourse' element={<EnrollForCourse/>}></Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
