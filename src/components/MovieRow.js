import React from  'react';
import './MovieRow.css';

const MovieRow = ({title, items}) => {
    return(<div>
        <h2>{title}</h2>
        <div className="movieRow--listarea">
            {items.results.length > 0 &&  items.results.map((item, key) =>{
                return(<img key={key}
                       src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                       alt={item.original_title}/>)
            })}
        </div>
    </div>)
}

export default MovieRow;