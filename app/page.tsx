// pages/index.tsx

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Hero from './components/Hero';


const Home: React.FC = () => {
  return (
    <>
    <div>
      <Hero/>
    </div>
    </>
  );
};

export default Home;
