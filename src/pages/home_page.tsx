import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

type HomePageProps = {
  isDark: boolean;
};

const HomePage: React.FC<HomePageProps> = ({ isDark }) => {
  return (
    <div>




    <div className='home1' style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>
      <div>
        <h1>The Energy Company<br />You Own</h1>
        <Link to="/about"><button style={{ backgroundColor: isDark ? '#000' : '#fff', color: isDark ? '#fff' : '#000' }}>About</button></Link>
      </div>
    </div>
    
<div className='home2' style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>
      <div>
        <h1>Meet Up<br />AMA</h1>
        <Link to="/about"><button style={{ backgroundColor: isDark ? '#000' : '#fff', color: isDark ? '#fff' : '#000' }}><FontAwesomeIcon icon={faBroadcastTower} /></button></Link>
      </div>
    </div>

    </div>
  );
};

export default HomePage;







