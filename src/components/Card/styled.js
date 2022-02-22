import styled from "styled-components";

export const ContainerCard = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  width: 400px;
  border: solid 2px #155765;
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
  }

  @media (max-width: 410px) {
    width: 300px;
  }
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 5px 10px;
  img {
    width: 90px;
    border-radius: 100px;
  }
`;
