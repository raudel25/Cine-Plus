import { AuthRouter } from "./AuthRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeRouter } from "./HomeRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />}></Route>
        <Route path="*" element={<HomeRouter />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
