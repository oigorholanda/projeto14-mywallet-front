import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import Login from "./components/Login";
import NewIn from "./components/NewIn";
import NewOut from "./components/NewOut";
import SignUp from "./components/SignUp";
import { backgroundColor } from "./constants/colors";
import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  return (
    <ContainerApp>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <AuthContext.Provider value={{ token, setToken }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/nova-entrada" element={<NewIn />} />
              <Route path="/nova-saida" element={<NewOut />} />
            </Routes>
          </AuthContext.Provider>
        </UserContext.Provider>
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
