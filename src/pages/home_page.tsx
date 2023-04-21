import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <main>
      <div>
        <h1>The Energy Company<br />You Own</h1>
        <Link to="/about"><button >About</button></Link>
      </div>
    </main>
  );
};

export default HomePage;









