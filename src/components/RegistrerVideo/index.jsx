import { useState } from "react";
import { StyledRegisterVideo } from "./styles";


function useForm(props) {
  const [values, setValues] = useState(props.initialValues);
  return {
    values,
    handleChange: (e)=>{
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value
      })
    },
    clearForm() {
      setValues(props.initialValues)
    }
  }
}

export function RegisterVideo() {
  const [formVisible, setFormVisible] = useState(false);


  /*
    ## O que precisamos para o from funcionar?
    - pegar os dados, que precisam vir do state
      - titulo
      - url do video
    - precisamos ter um onSubmit do nosso form
    - limpar o form após o Submit.
  */

  const formCadastro = useForm({
    initialValues: {title: "" , url: ""}
  });  

  return (
    <StyledRegisterVideo>
      <button 
        className="add-video"
        onClick={() => setFormVisible(true)}
      >
        +
      </button>
      {formVisible ? (
        <form onSubmit={(event)=> {
          event.preventDefault();
          console.log(formCadastro.values)
          formCadastro.clearForm();
          setFormVisible(false);
        }}>
          <div>
            <button
              type="button" 
              className="close-modal"
              onClick={() => setFormVisible(false)}
            >
              X
            </button>
            <input 
              type="text"
              name="title" 
              placeholder="Titulo do vídeo"
              value={formCadastro.values.title}
              onChange={formCadastro.handleChange}
            />
            <input 
              type="text"
              name="url"
              placeholder="URL"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
