import React, { useEffect, useState } from "react";
import cappacitaList from "./api/cappacitaList";
import ProdutionList from "./components/ProdutionList";
import './App.css'

export default () => {
  const [prodution, setProdution] = useState([]);

  useEffect(()=>{
    const loadList = async ()=>{
        let lista = await cappacitaList.getListHome();
        setProdution(lista)
    }
    loadList();
  }, []);


  return (
    <div className="pageHome" >
        {prodution.map((element, key)=>(
          <ProdutionList key={key} title={element.title} items={element.items}/>
        ))}
    </div>
  )
}