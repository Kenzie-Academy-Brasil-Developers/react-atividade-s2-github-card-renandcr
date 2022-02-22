import { ContainerCard, DivImage } from "./styled";

const Card = ({ name, image, description }) => {
  return (
    <ContainerCard>
      <DivImage>
        <img src={image} alt="Imagem de perfil"></img>
      </DivImage>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </ContainerCard>
  );
};
export default Card;
