import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [images,setImages] = useState([])

  const onSearchSubmit = async(term) => {
    const response = await axios.get('search/photos',{
    params:{ query: term },  
    headers:{
        Authorization: 'Client-ID QrqP3ddOejlGIHjbfppba0zq-L0Ks6ikgAfNJZTm9uw'
      } 
    });
    setImages(images + response.data.results)
    console.log(response.data.results)
    // images.map(image => <li key='index' >
    //   <img src=`${image}` />
    // </li>)
  }
  
  return (
    <>
      <div className="ui ">
        <SearchBar onSubmit={onSearchSubmit} imageList/>
        found: {images.length}
      </div>  
    </>
  );
}

export default App;
