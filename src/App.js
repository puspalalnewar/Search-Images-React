import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from 'autoprefixer';
import ImageCards from './Components/ImageCards';




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
  }, [])


  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((img)=>
        <ImageCards key={img.id} image = {img}/>
        )}
      </div>
    </div>
  );
}

export default App;
