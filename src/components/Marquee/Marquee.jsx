// Marquee.js
import React from 'react';
import './Marquee.css';

const services = [
  { name: 'Construction Sites Security', link: '/web-development' },
  { name: 'Key Holding', link: '/mobile-apps' },
  { name: 'Dog Guarding', link: '/ui-ux-design' },
  { name: 'Private Security', link: '/seo-services' },
  { name: 'House Security', link: '/cloud-solutions' },
];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {services.map((service, index) => (
          <a key={index} href={service.link} className="marquee-item lg:px-32 px-6 lg:text-3xl text-xl">
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
