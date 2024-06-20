"use client"

// Componentizar Adicionar item, Deleter item, Editar item para server
// Implementar tipagem
// Fazer um map dos inputs?
// Visualizar items na interface do usuario

interface Item {
  nome?: string;
  desc?: string;
  valor?: number;
  imagem?: string;
  estoque?: number;
  peso?: number;
}

const initialState = {
  message: null
}

import { useFormState } from "react-dom";
import { addItem, getData } from "./actions";
import { useEffect, useState } from "react";


const Admin = () => {
  const [state, formAction] = useFormState(addItem, initialState)
  const [data, setData ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setData(data);
    }
    fetchData()
  }, [])

  return (
    <main>
        Adicionar Item
        <br />
        {data.map((item: any) => {
          return(
            <p>{item.nome}</p>
          )
        })}

      <form action={formAction}>
        <input required type="text" name="nome" placeholder="Nome"/>
        <input required type="text" name="desc" placeholder="descricao"/>
        <input required type="number" name="valor" placeholder="valor"/>
        <input required type="number" name="estoque" placeholder="estoque"/>
        <input required type="number" name="peso" placeholder="peso"/>
        <span>{state.message}</span>
         <button type="submit">Add</button>
      </form>
    </main>
  );
}
export default Admin;
