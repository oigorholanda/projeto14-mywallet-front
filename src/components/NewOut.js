import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonColor } from "../constants/colors";

export default function NewOut() {
  return (
    <Form>
      <h2>Nova saída</h2>
      <input type="number" name="" id="" placeholder="Valor" />
      <input type="text" name="" id="" placeholder="Descrição" />
      <Link to="/home">
        <button>Salvar saida</button>
      </Link>
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
