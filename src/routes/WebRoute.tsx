import { Route, Routes } from "react-router-dom";
import Admin from "../pages/home/Admin";
import Ticket from "../pages/home/Ticket";
import User from "../pages/home/User";
import CinePlusWeb from "../pages/cine-plus/CinePlusWeb";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";

export const WebRouter = () => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content>
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="*" element={<CinePlusWeb />}></Route>
        </Routes>
      </Content>
      <Footer className="layout-footer">
        Cine Plus ©2023 Created by{" "}
        <Link href="https://github.com/raudel25">raudel25</Link>
      </Footer>
    </Layout>
  );
};
