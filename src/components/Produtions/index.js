import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemProdution from "../ItemProdution";
import './style.css';

const Produtions = ({title, items})=>{

    const [scrollX, setScroolX] = useState(0);

    const goPageDetalhes = (id, type)=>{
        
    }

    const leftArrow = ()=>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if( x > 0){
            x = 0
        }

        setScroolX(x);
    };

    const rightArrow = ()=>{
        let x = scrollX - Math.round(window.innerWidth / 2);

        let listW =items.list.results.length * 150;
        
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }

        setScroolX(x);

    };

    return(
        <div className="prodution_row">
            <h2>{title}</h2>
            <div className="navigation-left" onClick={leftArrow}>
                <FontAwesomeIcon icon="chevron-left" style={{fontSize: 50}}/>
            </div>
            <div className="navigation-right" onClick={rightArrow}>
            <FontAwesomeIcon icon="chevron-right" style={{fontSize: 50}}/>
            </div>
            <div className="list_area">
                <div className="list" style={{
                    marginLeft: scrollX,
                    width: items.list.results.length * 150
                 }}>                     
                     {items.list.results.length > 0 && items.list.results.map((element, key)=>(
                         <ItemProdution element={element} type={items.type} key={key}/>                    
                     ))}    
                </div>               
            </div>
        </div>
    );

};

export default Produtions;