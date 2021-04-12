import React, { useEffect, useState } from 'react';
import Tmdb from './services/Tmdb';
import MovieRow from './components/MovieRow';

const App = () => {

  const [movieList, setMovieList] = useState([]);

  
  useEffect(() => {

    const loadAll = async() => {
      // Pegando lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list);
    }

    loadAll();
  },[])

  return(<div className="page">
      <section className="lists">
       { movieList.map((item, key) => {
          return(<MovieRow key={key} title={item.title} items={item.items}/>)
        })} 
      </section> 
  </div>);
}

export default App;