import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Brochure.css';

const Brochure = () => {
  const flipBookRef = React.createRef();

  const handleNextPage = () => {
    flipBookRef.current.pageFlip().flipNext();
  };

  const handlePrevPage = () => {
    flipBookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className="bg-[#343A40] brochure-container ">
      <HTMLFlipBook
        width={300}
        height={450}
        size="stretch"
        minWidth={300}
        minHeight={450}
        maxWidth={500}
        maxHeight={750}
        ref={flipBookRef}
        className="brochure "
      >
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/2.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/3.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/4.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/5.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/6.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/7.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/8.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/9.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/10.jpg" alt="" />
        </div>
        <div className="page" style={{ WebkitUserDrag: 'element' }}>
          <img className='w-full h-full object-cover' src="https://www.leisureguardsecurity.co.uk/tower-guard/files/mobile/11.jpg" alt="" />
        </div>
      </HTMLFlipBook>
      <div className="navigation-buttons">
        <button onClick={handlePrevPage} className="prev-button">
          <FaArrowLeft size={30} />
        </button>
        <button onClick={handleNextPage} className="next-button">
          <FaArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Brochure;
