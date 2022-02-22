import Card from "../Card";

const ListCard = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data.map((current, index) => (
          <Card
            key={index}
            name={current.full_name}
            description={current.description}
            image={current.owner.avatar_url}
          />
        ))}
    </>
  );
};
export { ListCard };
