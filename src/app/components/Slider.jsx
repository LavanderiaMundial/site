import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: './slider1.webp'
  },
  {
    url: './slider2.webp'
  },
  {
    url: './slider3.webp'
  },
];

const Slideshow = () => {
  return (
    <div className="w-screen">
      <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: '100%' }} src={fadeImage.url} alt="Lavanderia Mundial Goiânia" />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  )
}

export default Slideshow;
