// Marquee.js
import React from 'react';
import './Marquee.css';

const services = [
  { name: 'Construction Sites Security', link: '/construction-sites-security' },
  { name: 'Key Holding', link: '/key-holding' },
  { name: 'Dog Guarding', link: '/dog-guarding' },
  { name: 'Private Security', link: '/private-security' },
  { name: 'House Security', link: '/house-security' },
  { name: 'Fire Marshal', link: '/fire-marshal' },
];

const Marquee = () => {
  return (
    <div className="marquee bg-primary">
      <div className="marquee-content">
        {services.map((service, index) => (
          <a key={index} href={service.link} className="marquee-item lg:px-32 px-6 lg:text-3xl text-base">
            {service.name}
          </a>
        ))}
        {/* Duplicate the items for seamless transition */}
        {services.map((service, index) => (
          <a key={index + services.length} href={service.link} className="marquee-item lg:px-32 px-6 lg:text-3xl text-xl">
            {service.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
