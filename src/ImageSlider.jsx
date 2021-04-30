import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import web from './Images/web.png';
import android from './Images/android.jpg';
import app from './Images/app.jpg';
import Image from './Image';

const slideImages = [
    web,
    android,
    app
];

const ImageSlider = () => {
    return (
        
        <div className="slide-container">
            <Slide>
                <Image imgSrc={slideImages[0]} />
                <Image imgSrc={slideImages[1]} />
                <Image imgSrc={slideImages[2]} />
            </Slide>
        </div>
    )
}

export default ImageSlider;