import React, { useState, useEffect, useCallback } from 'react';
import scan from '../../assets/scan.jpg';
import security from '../../assets/security.jpg';
import team from '../../assets/team.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [scan, security, team];

    // Remove prevSlide function if not used
    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    // };

    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, data.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [nextSlide]);

    const translateXValue = isLgScreen ? currentSlide * 50 : currentSlide * 80;

    return (
        <div className='relative overflow-hidden'>
            <div
                className='w-[240vw] h-[70vh] lg:w-[150vw] lg:h-[50vh] flex transition-all duration-1000'
                style={{ transform: `translateX(-${translateXValue}vw)` }}
            >
                {data.map((image, index) => (
                    <LazyLoadImage
                        key={index}
                        className='w-[80vw] h-[70vh] lg:w-[50vw] lg:h-[50vh] object-cover object-center'
                        alt={`slide-${index}`}
                        src={image}
                        effect="blur"
                    />
                ))}
            </div>
           
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
