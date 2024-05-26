import React, { useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCogs, faHeart, faPlay, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let isScrolling = false;

    const scrollToSection = (index) => {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = (event) => {
      if (isScrolling) return;
      isScrolling = true;
      setTimeout(() => { isScrolling = false; }, 500); // Adjust delay as needed

      const direction = event.deltaY > 0 ? 1 : -1;
      const currentSectionIndex = [...sections].findIndex((section) =>
        section.getBoundingClientRect().top >= 0
      );
      let nextSectionIndex = currentSectionIndex + direction;

      if (nextSectionIndex < 0) nextSectionIndex = 0;
      if (nextSectionIndex >= sections.length) nextSectionIndex = sections.length - 1;

      scrollToSection(nextSectionIndex);
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    const sidebar = document.querySelector('.navbar');
    sidebar.classList.toggle('active');
  };

  return (
    <div id="fullpage">
      <div className="menu-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#section1">Welcome</a></li>
          <li><a href="#section2">Integration</a></li>
          <li><a href="#section3">Enthusiasts</a></li>
          <li><a href="#section4">Get Started</a></li>
          <li><a href="#section5">Donate</a></li>
        </ul>
      </nav>
      <div className="section" id="section1">
    <div className="content">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <h2>Welcome to the Valorant Shop Bot</h2>
        <p>Instantly view your in-game Valorant item shop on Discord! Type <span className="highlight-command">!shop</span> to get real-time updates on the latest skins and gear available for purchase.</p>
    </div>
</div>

      <div className="section" id="section2">
        <div className="content">
          <FontAwesomeIcon icon={faCogs} className="icon" />
          <h2>Easy Integration</h2>
          <p>Easy setup and seamless integration with your server. Stay updated on limited-time offers and never miss out on exclusive items again.</p>
        </div>
      </div>
      <div className="section" id="section3">
        <div className="content">
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <h2>Perfect for Valorant Enthusiasts</h2>
          <p>Perfect for all Valorant enthusiasts! Keep track of the latest skins and offers right from your Discord server.</p>
        </div>
      </div>
      <div className="section" id="section4">
        <div className="content">
          <FontAwesomeIcon icon={faPlay} className="icon" />
          <h2>Get Started Now</h2>
          <p>Join our community and start using the Valorant Shop Bot today. Experience the best way to stay updated with the latest Valorant items.</p>
        </div>
      </div>
      <div className="section" id="section5">
        <div className="content">
          <FontAwesomeIcon icon={faCoffee} className="icon" />
          <h2>Support Me</h2>
          <p>If you enjoy using the Valorant Shop Bot, consider supporting me with a donation!</p>
          <a href="https://www.buymeacoffee.com/soleyman" className="donation-button">Buy Me a Coffee</a>
        </div>
      </div>
    </div>
  );
};

export default App;
