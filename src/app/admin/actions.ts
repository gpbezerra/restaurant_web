"use server"
// Componentizar Adicionar item, Deleter item, Editar item para server
// Implementar tipagem
// Lidar com imagem


// interface Cardapios {
//   items: Item[]
// }

// interface Item {
//   nome: string;
//   desc: string;
//   valor: number;
//   imagem?: string;
//   estoque: number;
//   peso: number;
// }

import { z } from "zod";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import {db} from "../../lib/firebase/config.js";

export async function getData(): any {
  const query = await getDocs(collection(db, "items"))
  const data: any = [];
  query.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()});
  })
  return data;
}

export async function addItem(prevState: any, formData: FormData){
  // console.log(formData)
    try{
      await addDoc(collection(db, "items"), {
        nome: formData.get("nome"),
        desc: formData.get("desc"),
        valor: formData.get("valor"),
        estoque: formData.get("estoque"),
        peso: formData.get("peso")
      });
      return {message: "Adiconado"}
    } catch (e) {
      console.error("Error: ", e);
      return{message: "Falhou"};
    }
}; 

