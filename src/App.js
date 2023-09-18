
import './App.css';
import ParallaxSlider from './components/parallaxSlider';

function App() {
  const images = [
    "/images/image2.jpg",
    "/images/image1.jpg",
    "/images/image3.jpg",
  ];
  return (
    <div className="App">
    <ParallaxSlider images={images}/>
    </div>
  );
}

export default App;
