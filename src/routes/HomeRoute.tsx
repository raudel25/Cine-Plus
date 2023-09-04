import { Route, Routes, Navigate } from "react-router-dom";
import Admin from "../pages/home/Admin";
import Ticket from "../pages/home/Ticket";
import User from "../pages/home/User";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/ticket" element={<Ticket />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route
        path="*"
        element={<Navigate to="/user" replace></Navigate>}
      ></Route>
    </Routes>
  );
};
