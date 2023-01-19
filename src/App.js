import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element />
          <Route path="/home" element />
          <Route path="/nova-entrada" element />
          <Route path="/nova-saida" element />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  background-color: purple;
  max-width: 375px;
  margin: auto;
  padding: 25px;
`;
