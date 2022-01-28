import React from 'react';
import Doit from 'assets/images/doit.png';
import { useAuth } from 'contexts/authContext';

const Home: React.FC = () => {
  const user = useAuth();

  console.log(user);

  return (
    <div>
      main
      {/* <img src={Doit} alt="" /> */}
    </div>
  );
};

export default Home;
