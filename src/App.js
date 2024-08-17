import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from 'autoprefixer';
import ImageCards from './Components/ImageCards';
import InputCards from './Components/InputCard';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  // const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=45475347-5cebfefaa3249e306c3f43ee5&q=y${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term])


  return (
    <div className="container mx-auto">
      <InputCards searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="flex flex-wrap justify-center gap-5">
        {images.map((img) =>
          <ImageCards key={img.id} image={img} />
        )}
      </div>}
    </div>
  );
}

export default App;
