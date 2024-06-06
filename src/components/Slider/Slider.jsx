import React, { useState, useEffect } from 'react';
import scan from '../../assets/scan.jpg';
import security from '../../assets/security.jpg';
import team from '../../assets/team.jpg';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [scan, security, team];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    };

    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const translateXValue = isLgScreen ? currentSlide * 50 : currentSlide * 80;

    return (
        <div className='relative overflow-x-hidden'>
            <div
                className='w-[240vw] h-[70vh] lg:w-[150vw] lg:h-[50vh] flex transition-all duration-1000'
                style={{ transform: `translateX(-${translateXValue}vw)` }}
            >
                {data.map((image, index) => (
                    
                    <LazyLoadImage
                    key={index}
                    className='w-[80vw] h-[70vh] lg:w-[50vw] lg:h-[50vh] object-cover object-center'
                    alt={`slide-${index}`}
                    src={image} // use normal <img> attributes as props
                     />
                ))}
            </div>
            <div className='flex absolute right-0 left-0 bottom-[100px] mx-auto w-[100px] gap-3'>
                <div>
                    <IoIosArrowDropleft
                        className='w-16 h-16 border-2 border-gray-500 text-gray-800 flex justify-center items-center cursor-pointer'
                        onClick={prevSlide}
                    />
                </div>
                <div>
                    <IoIosArrowDropright
                        className='w-16 h-16 border-2 border-gray-500 text-gray-800 flex justify-center items-center cursor-pointer'
                        onClick={nextSlide}
                    />
                </div>
            </div>
        </div>
    );
}

export default Slider;
