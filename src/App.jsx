import "./App.css";
import {Routes,Route} from "react-router-dom";
import LoginPage from "./page/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./page/RegisterPage";
import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Account from "./page/Account";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/account" element={<Account/>} />
        </Route>
      </Routes>
    </UserContextProvider>     
  );
}

export default App;
