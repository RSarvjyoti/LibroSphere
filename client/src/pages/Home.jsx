import backgroundImg from '../assets/background.png';

const Home = () => {
  const background = {
    height:"100vh",
    background: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: "0.5"
  };

  return (
    <div style={background} className='container'>
      {/* Content here */}
    </div>
  );
};

export default Home;
