import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { buttonColor } from "../constants/colors";
import AuthContext from "../contexts/AuthContext";

export default function NewIn() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/registries/in`, form, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })

      .catch((err) => {
        alert(err.response.data);
        console.log(err.response);
      });
  }

  return (
    <Form>
      <h2>Nova Entrada</h2>
      <input
        type="number"
        name="value"
        placeholder="Valor"
        onChange={(e) =>
          handleForm({
            name: e.target.name,
            value: e.target.value,
          })
        }
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição"
        onChange={(e) =>
          handleForm({
            name: e.target.name,
            value: e.target.value,
          })
        }
      />

      <button onClick={handleSubmit}>Salvar entrada</button>
    </Form>
  );
}

const Form = styled.form`
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 13px;

  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
    margin-bottom: 27px;
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
  input::placeholder {
    color: black;
  }
`;
