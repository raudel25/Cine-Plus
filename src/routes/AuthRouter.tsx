import { Route, Routes, Navigate } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="*"
        element={<Navigate to="/auth/login" replace></Navigate>}
      ></Route>
    </Routes>
  );
};
