import React,{ useEffect, useRef, useState } from 'react';

const ImageCard = (props) => {
    const [spans,setSpans] = useState(0);
    const imgRef = useRef('')

    useEffect(() => {
        imgRef.current.addEventListener('load', adjustSpans)
    },[])

    const adjustSpans = () => { 
        console.log(imgRef.current.clientHeight)
        const height = imgRef.current.clientHeight
        const adjustedSpans = Math.ceil(height / 10)
        setSpans(adjustedSpans)
    }

    return(
        <div style={{gridRowEnd:`span ${spans}`}}>
            <img ref={imgRef} src={props.image.urls.regular} alt={props.image.urls.alt_description}/>
        </div>
    )
}

export default ImageCard;