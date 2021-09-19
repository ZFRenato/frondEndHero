import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ProdutionList.css';
export default ({title, items})=>{

    const [scrollX, setScroolX] = useState(-400)

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
                         <div className="item" key={key}> 
                                <img src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} alt={element.original_name}/>
                         </div>                        
                     ))}    
                </div>               
            </div>
        </div>
    );
}