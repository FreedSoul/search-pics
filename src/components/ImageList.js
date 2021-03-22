import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css'

const ImageList = ({list}) => {
    
    const renderList = list.map((image,index) => <ImageCard key={index} image={image}/>) 
    return(
        <div className="images-list">
        {renderList}
        </div>
    )
}

export default ImageList