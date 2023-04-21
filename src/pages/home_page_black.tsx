import React from 'react';
import { Link } from 'react-router-dom';

const HomePageBlack: React.FC = () => {
  return (
    <div className="main_dark_home">
      <div>
        <h1>The Energy Company<br />You Own</h1>
        <Link to="/about"><button >About</button></Link>
      </div>
    </div>
  );
};

export default HomePageBlack;









