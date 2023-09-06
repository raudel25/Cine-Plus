import { AuthRouter } from "./AuthRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeRouter } from "./HomeRoute";
import CinePlusWeb from "../pages/cine-plus/CinePlusWeb";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />}></Route>
        <Route path="/home" element={<HomeRouter />}></Route>
        <Route path="*" element={<CinePlusWeb />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
