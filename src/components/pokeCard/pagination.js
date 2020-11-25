import React from 'react';

function Pagination(props){
    
    
    
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