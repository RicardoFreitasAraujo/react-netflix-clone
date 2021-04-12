import React, { useEffect, useState } from 'react';
import Tmdb from './services/Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);


  const loadAll = async() => {
    
    // Pegando lista Total
    let list = await Tmdb.getHomeList();
    setMovieList(list);

    // Pegando o feature
    let originals = list.filter(i => i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    console.log(chosen);
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  }
  
  useEffect(() => {

   

    loadAll();
  },[])

  return(<div className="page">
      { featuredData &&
        <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
       { movieList.map((item, key) => {
          return(<MovieRow key={key} title={item.title} items={item.items}/>)
        })} 
      </section> 
  </div>);
}

export default App;