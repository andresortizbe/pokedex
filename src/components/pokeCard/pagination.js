import React from 'react';

function Pagination(props){
    
    const pokemonArray = Array.apply(null, Array(10)).map(() => {})
    
    return (
        <div className="pagination-row">
            {
             props.pokePagination.map( (element,index) => {
                return <div key={index} className="item" onClick={() => props.fetchPageFn(element)}>{element}</div>
            })               
            
            }
            
        </div>
    )
}

export default Pagination;