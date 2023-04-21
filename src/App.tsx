import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home_page';
import AboutPage from './pages/about_page';
import MintPage from './pages/mint_page';
import ContactPage from './pages/contact_page';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            
            <ul className="nav-links">
            <li>
            <Link to="/">
            <img height="40px"  src="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/Ark4_new_tmp.jpeg" alt="Logo" />

              </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/mint">Mint</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mint" element={<MintPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <footer>
  <div className="social-icons">
    <a href="https://www.facebook.com"><img src="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/march16_facebook.png" alt="Facebook" /></a>
    <a href="https://www.twitter.com"><img src="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/march16_twitter.png" alt="Twitter" /></a>
    <a href="https://www.instagram.com"><img src="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/march16_instagram.png" alt="Instagram" /></a>
    <a href="https://www.youtube.com"><img src="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/march16_youtube.png" alt="YouTube" /></a>
    <a href="https://www.github.com"><img src="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/march16_email.png" alt="GitHub" /></a>
  </div>
</footer>

      </div>
    </Router>
  );
}

export default App;
