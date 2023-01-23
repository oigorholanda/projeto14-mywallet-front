import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonColor, textColor } from "../constants/colors";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function Home() {
  return (
    <ConteinerHome>
      <Title>
        Olá, Fulano
        <Link to="/">
          <RiLogoutBoxRLine size={25} />
        </Link>
      </Title>
      <SemRegistros>
        <p>Não há registros de entrada ou saída</p>
      </SemRegistros>
      <Botoes>
        <Link to="/nova-entrada">
          <FiPlusCircle size={22} /> Nova <br /> Entrada
        </Link>
        <Link to="/nova-saida">
          <FiMinusCircle size={22} /> Nova <br /> Saída
        </Link>
      </Botoes>
    </ConteinerHome>
  );
}

const ConteinerHome = styled.div`
  max-width: 800px;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 13px;
  margin: auto;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
  margin-bottom: 7px;
`;

const SemRegistros = styled.div`
  width: 100%;
  height: 80vh;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  box-shadow: 0 7px 5px -6px black;
  color: ${textColor};
  p {
    margin: auto;
  }
`;

const Botoes = styled.div`
  width: 100%;
  max-width: 450px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
    width: 156px;
    height: 115px;
    border: none;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
    background: ${buttonColor};
    border-radius: 5px;
    padding: 10px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    box-shadow: 0 9px 10px -6px black;
    &:hover {
      cursor: pointer;
    }
  }
`;
