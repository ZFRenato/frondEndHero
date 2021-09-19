import React from "react";
import './ProdutionList.css';

export default ({title, items})=>{

    return(
        <div className="prodution_row">
            <h2>{title}</h2>
            <div className="list_area">
                <div className="list">                     
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