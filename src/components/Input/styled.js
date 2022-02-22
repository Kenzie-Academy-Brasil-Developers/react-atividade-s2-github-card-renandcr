import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  margin-top: 20px;
  width: 400px;
  box-sizing: border-box;
  background-color: #155765;
  padding: 15px 15px 30px 15px;
  border-radius: 4px;

  :hover {
    box-shadow: 0 0 5px #ed9121, 0 0 10px #ed9121;
    transition: ease-in-out 0.5s;
  }

  h3 {
    margin: 0 0 10px 0;
    color: #ed9121;
    font-size: 25px;
  }

  p {
    margin: 0;
    font-size: 10px;
    color: rgb(212, 32, 32);
    text-align: left;
  }
  h4 {
    font-size: 16px;
    margin: 10px 0 0 0;
    color: rgb(200, 32, 28);
  }
  form {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  input {
    max-width: 100%;
    height: 40px;
    margin-top: 10px;
    border: none;
    padding-left: 10px;
    border-radius: 3px;
  }

  button {
    cursor: pointer;
    max-width: 100%;
    margin-top: 14px;
    height: 48px;
    border-radius: 3px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    background-color: #ed9121;
    color: #015249;
  }

  button:hover {
    box-shadow: 0 0 10px #ed9121, 0 0 10px #ed9121;
    transition: ease-in 0.5s;
    background-color: transparent;
    color: #ed9121;
  }

  button:active {
    box-shadow: 0 0 15px #ed9121, 0 0 20px #ed9121;
    font-size: 18px;
    transition: 0.1s;
  }

  @media (max-width: 410px) {
    width: 300px;
  }
`;
