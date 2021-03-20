import React, { useState } from 'react';
import unsplash from '../src/api/unsplash.js'
import './App.css';
import ImageList from './components/ImageList.js';
import SearchBar from './components/SearchBar';

function App() {
  const [images,setImages] = useState([])

  const onSearchSubmit = async(term) => {
    const response = await unsplash.get('search/photos',{
    params:{ query: term }
    });
    setImages(response.data.results)
    
  }
  
  return (
    <>
      <div className="ui">
        <SearchBar onSubmit={onSearchSubmit} />
        found: {images.length}
        <ImageList list={images}/>
      </div>  
    </>
  );
}

export default App;
