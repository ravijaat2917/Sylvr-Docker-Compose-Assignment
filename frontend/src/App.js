import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/update" element={<UpdatePage />} />


    </Routes>
  );
}

export default App;
