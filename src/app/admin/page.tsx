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
import { addItem } from "./actions";


const Admin = () => {
  const [state, formAction] = useFormState(addItem, initialState)
  return (
    <main>
        Adicionar Item
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
