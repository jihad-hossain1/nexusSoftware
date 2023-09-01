import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";

const Main = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
