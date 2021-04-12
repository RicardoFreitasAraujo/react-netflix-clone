import React, { useEffect, useState } from 'react';
import Tmdb from './services/Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/header';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    /*
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }*/
  },[])

  return(<div className="page">
    <Header black={blackHeader}/>
      { featuredData &&
        <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
       { movieList.map((item, key) => {
          return(<MovieRow key={key} title={item.title} items={item.items}/>)
        })} 
      </section> 
      <footer>
        Desenvolvido por Ricardo Freitas somente para estudos<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org<br/>
      </footer>
  </div>);
}

export default App;