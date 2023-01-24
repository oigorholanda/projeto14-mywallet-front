import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { buttonColor, green, red, textColor } from "../constants/colors";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

export default function Home() {
  const { user } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const [registries, setRegistries] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/registries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRegistries(res.data.registries);

        let total = 0;
        res.data.registries.forEach((transaction) => {
          if (transaction.type === "in") {
            total += Number(transaction.value);
          } else {
            total -= Number(transaction.value);
          }
        });

        setTotalBalance(total);
        console.log(total);
      })
      .catch((err) => {
        console.log(err.response);
        if (window.confirm(err.response.data)) {
          navigate("/");
        }
      });
  }, []);

  return (
    <ContainerHome>
      <Title>
        Olá, {user ? user.name : "Fulano"}!
        <Link to="/">
          <RiLogoutBoxRLine size={25} />
        </Link>
      </Title>
      <Registries>
        {registries.length === 0 ? (
          <p> Não há registros de entradas ou saídas </p>
        ) : (
          <>
            <ul>
              {registries.map((transaction, index) => (
                <li key={index}>
                  <div>
                    <span>{transaction.createdAt.substr(0, 5)}</span>
                    <strong>{transaction.description}</strong>
                  </div>

                  <Value color={transaction.type}>R$ {transaction.value}</Value>
                </li>
              ))}
            </ul>
            <article>
              <span>Saldo</span>
              <span>R$ {totalBalance.toFixed(2)}</span>
            </article>
          </>
        )}
      </Registries>
      <Botoes>
        <Link to="/nova-entrada">
          <FiPlusCircle size={22} /> Nova <br /> Entrada
        </Link>
        <Link to="/nova-saida">
          <FiMinusCircle size={22} /> Nova <br /> Saída
        </Link>
      </Botoes>
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
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

const Registries = styled.div`
  width: 100%;
  height: 80vh;
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  overflow: auto;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  box-shadow: 0 7px 5px -6px black;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  ul li div span {
    color: #c6c6c6;
    margin-right: 0.7rem;
  }
  article {
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
  }
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

const Value = styled.div`
  color: ${(props) => (props.color === "in" ? `${green}` : `${red}`)};
`;
