import React from 'react';
import { mainCarouselData } from './mainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarosel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = mainCarouselData.map((item)=><img className="cursor-pointer" role="presentation" src={item.image} alt=""/>)
    return (
        <AliceCarousel
        // mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
        responsive={responsive}
        controlsStrategy="alternate"
    />
    )
    
};

export default MainCarosel