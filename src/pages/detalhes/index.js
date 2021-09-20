import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import cappacitaList from "../../api/cappacitaList";


const Detalhes = ()=>{
    const [protudion, setProdution] = useState({});

    useEffect(()=>{
        const data = {
            id: localStorage.getItem('@produtionId'),
            type: localStorage.getItem('@produtionType')            
        };      
        const loadItem = async ()=>{
            let item = await cappacitaList.getProdution(data.id, data.type);
            console.log(item)
            setProdution(item)

        }
        loadItem();
        console.log(protudion)
    }, [])

    return (
        <div>
            <Header/>
            <section className="hero" >
            <div className="hero_h"> 
                <div className="hero_text">
                    <div>Saiba Mais Sobre</div>
                    <div>Suas Produções Prediletas</div>
                    <div>Aqui</div>
                </div>                           
             </div>            
          </section>
    </div>        
        
    )
}

export default Detalhes;