import "./App.css";
import {Routes,Route} from "react-router-dom";
import LoginPage from "./page/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./page/RegisterPage";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
      </Route>

    </Routes>
      
  );
}

export default App;
