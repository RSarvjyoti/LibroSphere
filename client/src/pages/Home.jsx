import React from 'react';
import backgroundImg from '../assets/background.png';
import { ReactTyped } from "react-typed";

const Home = () => {
  const background = {
    height: "100vh",
    background: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: "flex",
    alignItems: "center",
    flexDirection : "column",
    justifyContent: "center",
    fontSize: "40px",
    fontWeight: "700",
    color: "#fff"
  };

  return (
    <>
    <div style={background}>
      <ReactTyped 
       strings={["Welcome to the LibroSphere......"]}
       typeSpeed={40}
       backSpeed={80}
       loop />
    </div>
    </>
  );
};

export default Home;
