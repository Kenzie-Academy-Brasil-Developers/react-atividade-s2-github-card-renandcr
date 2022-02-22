import { Container } from "./styled.js";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

export const Input = ({ setData, data, setError, error }) => {
  const schema = yup.object().shape({
    search: yup.string("Falha na busca").required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (item) => {
    axios
      .get(`https://api.github.com/repos/${item.search}`)
      .then((response) => {
        setError(false);
        setData([...data, response.data]);
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Buscar repositórios no Github</h3>
        <input
          placeholder="Digite sua pesquisa"
          {...register("search")}
        ></input>
        <p>{errors.search?.message}</p>
        <button>Pesquisar</button>
      </form>
      {error && <h4>Falha na requisição</h4>}
    </Container>
  );
};
