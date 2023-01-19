import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/MyWallet.png";
import { ThreeDots } from "react-loader-spinner";
import { buttonColor } from "../constants/colors";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar(event) {
    event.preventDefault();
    setloading(true);
    navigate("/home")
  }

  return (
    <>
      <Form onSubmit={logar}>
        <img src={Logo} alt="logo MyWallet" />
        <input
          id="login"
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={loading}
          //   required
        />
        <input
          id="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
          disabled={loading}
          //   required
        />

        <button type="submit" disabled={loading}>
          {!loading ? (
            "Entrar"
          ) : (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ marginTop: -18, marginLeft: 120 }}
              wrapperClassName=""
              visible={true}
            />
          )}
        </button>

        <Link to="/cadastro">
          <p href="">
            Primeira vez? <span>Cadastre-se!</span>
          </p>
        </Link>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  margin: 120px auto;
  img {
    margin-bottom: 30px;
  }
  button {
    color: white;
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    background: ${buttonColor};
    border-radius: 5px;
    margin-bottom: 15px;
    box-shadow: 0 9px 10px -6px black;
    &:hover{
        cursor: pointer;
    }
  }
  p {
    margin-top: 20px;
    color: white;
    font-weight: 700;
    text-decoration-line: underline;
    span {
      font-style: italic;
    }
  }
`;
