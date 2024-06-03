import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';


const HomeSectionCarosel = ({data , sectionName}) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 4.5 },
    };
    const slidePrev = () =>setActiveIndex(activeIndex-1) 
    const slideNext = () =>setActiveIndex(activeIndex+1) 
    const syncIndex = ({ item }) =>setActiveIndex(item) 

    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />)
    return (
        <div className=" p-4 lg:p-8">
            <h1 className='text-white text-2xl font-extrabold text-start'>{sectionName}</h1>
            <div className="relative px-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-4 && <Button
                    variant="contained"
                    className=" z-50 bg-white"
                    onClick={slideNext}
                    sx={{ position: 'absolute', top: '12rem', right: '0rem', transform: 'translate(50%) rotate(90deg)' }}
                    aria-label='next'>

                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}
                {activeIndex !==0 && <Button
                    variant="contained"
                    className=" z-50 bg-white "
                    onClick={slidePrev}
                    sx={{ position: 'absolute', top: '12rem', left: '-4rem', transform: 'translate(50%) rotate(90deg)' }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                </Button>}

            </div>
        </div>
    )
}

export default HomeSectionCarosel
