import React, { useState } from 'react';
import './App.css';

import BeyondTheBoundaryImg from './assets/Beyond The Boundary.jpg';
import HorimiyaImg from './assets/Horimiya.jpeg';
import AngelImg from './assets/Angels Last Mission - Love.jpg';
import CrashLandingOnYouImg from './assets/Crash Landing on You.jpeg';
import BulgasalImg from './assets/Bulgasal - Immortal Souls.jpg';
import HyoukaImg from './assets/Hyouka.png';
import FlowerOfEvilImg from './assets/Flower of Evil.jpg';
import GoblinImg from './assets/Goblin - The Lonely And Great God.jpg';
import MissionPossibleImg from './assets/Mission Possible.jpg';
import FlexXCopImg from './assets/Flex-x-Cop.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchLetter, setSearchLetter] = useState('');
  const [hoveredShow, setHoveredShow] = useState(null);

  const shows = [
    {
      title: "Beyond the Boundary",
      genre: "Comedy, Action, Fantasy, Romance",
      imgSrc: BeyondTheBoundaryImg,
      link: "https://hianime.to/beyond-the-boundary-855?ref=search",
      trailer: "https://www.youtube.com/embed/HU5EeNd1iXM"
    },
    {
      title: "Horimiya",
      genre: "Romance, Comedy",
      imgSrc: HorimiyaImg,
      link: "https://hianime.to/horimiya-15733?ref=search",
      trailer: "https://www.youtube.com/embed/GVQGWgeVc4k"
    },
    {
      title: "Angel's Last Mission: Love",
      genre: "Comedy, Romance, Drama, Fantasy",
      imgSrc: AngelImg,
      link: "https://goku.sx/series/watch-angels-last-mission-love-44918",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Crash Landing on You",
      genre: "Military, Comedy, Romance, Political",
      imgSrc: CrashLandingOnYouImg,
      link: "https://goku.sx/series/watch-crash-landing-on-you-60127",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Bulgasal: Immortal Souls",
      genre: "Thriller, Mystery, Drama, Fantasy",
      imgSrc: BulgasalImg,
      link: "https://goku.sx/series/watch-bulgasal-immortal-souls-75580",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Hyouka",
      genre: "Comedy, Action, Fantasy, Romance",
      imgSrc: HyoukaImg,
      link: "https://hianime.to/hyouka-349?ref=search",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Flower of Evil",
      genre: "Thriller, Romance, Crime, Melodrama",
      imgSrc: FlowerOfEvilImg,
      link: "https://goku.sx/movie/watch-mission-possible-68887",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Goblin - The Lonely And Great God",
      genre: "Comedy, Romance, Fantasy, Melodrama",
      imgSrc: GoblinImg,
      link: "https://goku.sx/movie/watch-mission-possible-68887",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Mission: Possible",
      genre: "Action, Comedy",
      imgSrc: MissionPossibleImg,
      link: "https://goku.sx/movie/watch-mission-possible-68887",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Flex X Cop",
      genre: "Action, Thriller, Mystery, Comedy",
      imgSrc: FlexXCopImg,
      link: "https://goku.sx/series/watch-flex-x-cop-105640",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
  ];

  const filteredShows = shows.filter(show =>
    show.title.toLowerCase().startsWith(searchLetter.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src="./assets/BingeHive.webp" alt="BingeHive Logo" className="logo" />
        <h1>Welcome to BingeHive</h1>
        <p>Your buzzing hive for endless entertainment!</p>
        
        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        
        {/* Navigation menu */}
        {isMenuOpen && (
          <nav className="nav-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        {/* Alphabet search */}
        <div className="alphabet-search">
          <p>Search by Letter:</p>
          <div className="letters">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(letter => (
              <span
                key={letter}
                className={`letter ${letter === searchLetter ? 'selected' : ''}`}
                onClick={() => setSearchLetter(letter)}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Show cards */}
        <div className="card-container">
          {filteredShows.map((show, index) => (
            <div
              key={index}
              className="card"
              onMouseEnter={() => setHoveredShow(index)}
              onMouseLeave={() => setHoveredShow(null)}
            >
              <a href={show.link} target="_blank" rel="noreferrer">
                <div className="desc">
                  <div className="media-container">
                    {hoveredShow === index ? (
                      <iframe
                        className="trailer"
                        src={show.trailer}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={show.title}
                      ></iframe>
                    ) : (
                      <img src={show.imgSrc} alt={show.title} className="poster" />
                    )}
                  </div>
                  <h3 className="card-title">{show.title}</h3>
                  <p className="card-genre">Genre: {show.genre}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>
          © 2024 BingeHive. All your favorite series in one buzzing hive. Watch uninterrupted and ad-free.
        </p>
      </footer>
    </div>
  );
}

export default App;
