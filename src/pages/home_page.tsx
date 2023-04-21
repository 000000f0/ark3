import React from 'react';
import { Link } from 'react-router-dom';

type HomePageProps = {
  isDark: boolean;
};

const HomePage: React.FC<HomePageProps> = ({ isDark }) => {
  return (
    <main style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>
      <div>
        <h1>The Energy Company<br />You Own</h1>
        <Link to="/about"><button style={{ backgroundColor: isDark ? '#000' : '#fff', color: isDark ? '#fff' : '#000' }}>About</button></Link>
      </div>
    </main>
  );
};

export default HomePage;







