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
import MissionPossibleImg from './assets/Mission Possible.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchLetter, setSearchLetter] = useState('');

  const shows = [
    {
      title: "Beyond the Boundary",
      genre: "Comedy, Action, Fantasy, Romance",
      imgSrc: BeyondTheBoundaryImg,
      link: "https://hianime.to/beyond-the-boundary-855?ref=search",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Horimiya",
      genre: "Romance, Comedy",
      imgSrc: HorimiyaImg,
      link: "https://hianime.to/horimiya-15733?ref=search",
      trailer: "https://www.youtube.com/embed/trailer_link_2"
    },
    {
      title: "Angel's Last Mission: Love",
      genre: "Comedy, Action, Fantasy, Romance",
      imgSrc: AngelImg,
      link: "https://goku.sx/series/watch-angels-last-mission-love-44918",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Crash Landing on You",
      genre: "Comedy, Action, Fantasy, Romance",
      imgSrc: CrashLandingOnYouImg,
      link: "https://goku.sx/series/watch-crash-landing-on-you-60127",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Bulgasal - Immortal Souls",
      genre: "Comedy, Action, Fantasy, Romance",
      imgSrc: BulgasalImg,
      link: "https://aniwatch.to/beyond-the-boundary-855?ref=search",
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
      genre: "Comedy, Action, Fantasy, Romance",
      imgSrc: FlowerOfEvilImg,
      link: "https://aniwatch.to/beyond-the-boundary-855?ref=search",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Goblin - The Lonely And Great God",
      genre: "Action, Comedy, Fantasy, Romance",
      imgSrc: GoblinImg,
      link: "https://aniwatch.to/beyond-the-boundary-855?ref=search",
      trailer: "https://www.youtube.com/embed/trailer_link_1"
    },
    {
      title: "Mission: Possible",
      genre: "Action, Comedy",
      imgSrc: MissionPossibleImg,
      link: "https://aniwatch.to/beyond-the-boundary-855?ref=search",
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
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) video.play();
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) video.pause();
              }}
            >
              <a href={show.link} target="_blank" rel="noreferrer">
                <div className="desc">
                  <video className="trailer" muted loop poster={show.imgSrc}>
                    <source src={show.trailer} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
