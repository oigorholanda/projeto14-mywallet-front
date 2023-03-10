import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { buttonColor } from "../constants/colors";
import Logo from "../assets/MyWallet.png";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [senha2, setSenha2] = useState("");

  async function cadastrar(e) {
    e.preventDefault();
    setloading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, {
        email,
        name: nome,
        password: senha,
        confirmPassword: senha2,
      });
      alert("Cadastro efetuado com sucesso! Realize o Login");
      navigate("/");
    } catch (err) {
      alert(err.response.data);
      console.log(err.response);
      setloading(false);
    }
  }

  return (
    <>
      <Form onSubmit={cadastrar}>
        <img src={Logo} alt="logo" />
        <input
          id="name"
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          disabled={loading}
          required
        />
        <input
          id="login"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={loading}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
          disabled={loading}
          required
        />

        <input
          id="password2"
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setSenha2(e.target.value)}
          value={senha2}
          disabled={loading}
          required
        />

        <button type="submit" disabled={loading}>
          {!loading ? (
            "Cadastrar"
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

        <Link to="/">
          <p>
            J?? tem uma conta? <span>Entre agora!</span>
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
  margin: 75px auto;
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
    &:hover {
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
