import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { backgroundColor } from "./constants/colors";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element />
          <Route path="/nova-entrada" element />
          <Route path="/nova-saida" element />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  background-color: ${backgroundColor};
  width: 100vw;
  min-width: 375px;
  height: 100vh;
  margin: auto;
  padding: 25px;
`;
