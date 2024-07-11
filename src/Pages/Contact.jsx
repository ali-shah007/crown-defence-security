import React from 'react'
import Contact from '../components/Contact/Contact'
import PageTopComponent from '../components/PageTopComponent/PageTopComponent';



function Contactpage() {
  

  return (
    <div className='mt-10'>
      <PageTopComponent type='Contact'/>
      <Contact/>
      
 </div>
  );
}

export default Contactpage