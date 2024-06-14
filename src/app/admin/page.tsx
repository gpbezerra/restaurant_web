"use client"

// Componentizar Adicionar item, Deleter item, Editar item para server
// Implementar tipagem
// Fazer um map dos inputs?
// Visualizar items na interface do usuario
interface Cardapios {
  items: Item[]
}

interface Item {
  nome: string;
  desc: string;
  valor: number;
  imagem?: string;
  estoque: number;
  peso: number;
}

import { useState } from "react";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import {db} from "../../lib/firebase/config.js";


const Admin =  () => {
  const [item, setItem] = useState({
    "nome": "",
    "desc": "",
    "valor": 0 ,
    "estoque": 0,
    "peso": 0,
  });

  const addItem = async (event: any) => {
    event.preventDefault();
    try{
      const newItem = await addDoc(collection(db, "items"), {
        nome: item.nome,
        desc: item.desc,
        valor: item.valor,
        estoque: item.estoque,
        peso: item.peso,
      });
      console.log("Id: ", newItem.id);
      setItem({
        "nome": "",
        "desc": "",
        "valor": 0 ,
        "estoque": 0,
        "peso": 0,
      });
    } catch (e) {
      console.error("Error: ", e);
    }
  } 

  return (
    <main>
        Adicionar Item
      <form onSubmit={addItem}>
        <input 
        type="text"
        value={item.nome}
        placeholder="Nome"
        onChange={(e) => setItem({
          nome : e.target.value,
          desc: item.desc,
          valor: item.valor,
          estoque: item.estoque,
          peso: item.peso,
        })}
         />
         <button type="submit">Add</button>
      </form>
    </main>
  );
}
export default Admin;
