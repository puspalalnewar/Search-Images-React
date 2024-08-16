import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from 'autoprefixer';




function App() {

  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setterm] = useState("flower");
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${term}&client_id=${process.env.accessKey}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="max-w-sm overflow-hidden shadow-lg">
      <img src="https://plus.unsplash.com/premium_photo-1723672584731-52b5f1a67543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full' />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By Kane Williamsan
        </div>
        <div>
          <ul>
            <li><strong>Views : </strong>
              4000
            </li>
            <li><strong>Downloads : </strong>
              4000
            </li>
            <li><strong>Likes : </strong>
              4000
            </li>
          </ul>
        </div>
        <div className="py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
        </div>
      </div>
    </div>
  );
}

export default App;
