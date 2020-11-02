import React from 'react';
import { Carousel } from 'react-bootstrap';

import slide1 from '../../images/slider/1.jpg';
import slide2 from '../../images/slider/2.jpg';
import slide3 from '../../images/slider/3.jpg';
import slide4 from '../../images/slider/4.jpg';
import slide5 from '../../images/slider/5.jpg';
import slide6 from '../../images/slider/6.jpg';

const data = [
  {
    image: slide1,
    content: {
      title: 'First Slide',
    },
  },
  {
    image: slide2,
    content: {
      title: 'Second Slide',
    },
  },
  {
    image: slide3,
    content: {
      title: 'Third Slide',
    },
  },
  {
    image: slide4,
    content: {
      title: 'Third Slide',
    },
  },
  {
    image: slide5,
    content: {
      title: 'Third Slide',
    },
  },
  {
    image: slide6,
    content: {
      title: 'Third Slide',
    },
  },
];

export default function Slider() {
  return (
    <React.Fragment>
      <style type="text/css">
        {`
        
    .carousel-indicators  {
      display: none;
    }
    .carousel-control-next, .carousel-control-prev { 
      top: 25%;
      align-items: flex-start;
      z-index:0;
    }
  
    .mask {
       -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0) );
    }
    `}
      </style>
      <Carousel>
        {data.map((d) => (
          <Carousel.Item key={d.content.title}>
            <img
              className="d-block w-100 mask"
              src={d.image}
              alt={d.content.title}
              key={d.content.title}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </React.Fragment>
  );
}
