import React from "react";
import Searchbar from "./Components/Searchbar";
import Image from "./Components/Image";

function App() {
  const [images, setimages] = React.useState([]);
  const [serchvlue, setsearchvalue] = React.useState('cats')

  React.useEffect(()=> {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${serchvlue}&image_type=photo`)
    .then(res => res.json())
    .then(res => setimages(res.hits))
  }, [serchvlue])

  return (
    <>
      <nav>
        <h1>PHOTO GALLERY</h1>
      </nav>
      <Searchbar controlsearchvalue={(input) => setsearchvalue(input)} />
      <div className="img-container">
        {images.length === 0 ? 'Sorry no photos found!!' : images.map((img) => <Image key={img.id} img={img} />)}
      </div>
    </>
  );
}

export default App;
