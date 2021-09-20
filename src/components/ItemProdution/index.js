import React from "react";


const ItemProdution = ({element, type})=>{

    const goDetal = ()=>{
        console.log(element.id, type)
        localStorage.setItem('@produtionId', element.id);
        localStorage.setItem('@produtionType', type);
        window.location.href = "/detals"
    }

    return (
        <div className="item" onClick={goDetal}>                          
            <img src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} alt={element.original_name}/>
        </div>  
    )
}

export default ItemProdution;