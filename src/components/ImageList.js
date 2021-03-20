import React from 'react';

const ImageList = ({list}) => {
    
    return(
        <>
        {list.map((image,index) => <div key={index} className="ui grid medium"><img src={image.urls.regular} alt={`car ${index}`}/></div>)}
        </>
    )
}

export default ImageList