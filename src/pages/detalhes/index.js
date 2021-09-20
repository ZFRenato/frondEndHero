import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import cappacitaList from "../../api/cappacitaList";


const Detalhes = ()=>{
    const [prodution, setProdution] = useState();
  
    useEffect(()=>{
        const data = {
            id: localStorage.getItem('@produtionId'),
            type: localStorage.getItem('@produtionType')            
        }; 
      const loadList = async ()=>{
          let lista = await cappacitaList.getProdution(data.id, data.type);
          setProdution(lista)
      }
      loadList();
    }, []);

    const getImage = ()=>{
        let img
            if(prodution !== undefined){
                img = `https://image.tmdb.org/t/p/original${prodution[0].item.list.backdrop_path}`;
            }else{
                img = "../../img/pipoca-cinema-m.png";
            }
        return img
    }

    return (
        <div>
            <Header/>
            <section className="hero" style={{
                backgroundImage: `url(${getImage()})`
            }} >
            <div className="hero_h"> 
                <div className="hero_text">
                    {prodution !== undefined &&
                        <>
                            <div className="titulo">
                                 {prodution[0].item.list.name || prodution[0].item.list.title}
                             </div>
                             <div className="info">
                                 <div className="point">
                                     {prodution[0].item.list.vote_average} nota  
                                 </div>
                                 <div className="descricao">
                                     {prodution[0].item.list.overview}
                                 </div>
                             </div>
                        </>
                        
                    }
                </div>                           
             </div>            
          </section>
    </div>        
        
    )
}

export default Detalhes;