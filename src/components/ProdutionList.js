import React from "react";
import './ProdutionList.css';

export default ({title, items})=>{

    return(
        <div>
            <h2>{title}</h2>
            <div className="list_area">
                {console.log(items.list.results)}
                {items.list.results.length > 0 && items.list.results.map((element, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w200${element.poster_path}`}/>
                ))}
            </div>
        </div>
    );
}