import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <Button label="Learn More" onClick={() => alert('More info')} />
    </div>
  );
};

export default Home;
