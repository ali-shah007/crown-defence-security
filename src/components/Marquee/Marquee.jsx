// Marquee.js
import React from 'react';
import './Marquee.css';
import { Link } from 'react-router-dom';

const services = [
  { name: 'Construction Sites Security', link: '/construction-site-security-uk' },
  { name: 'Key Holding', link: '/key-holding-service-uk' },
  { name: 'Dog Guarding', link: '/dog-handler-security-uk' },
  { name: 'Traffic Marshal', link: '/traffic-marshal-uk' },
  { name: 'CCTV Monitoring', link: '/cctv-monitoring-uk' },
  { name: 'Fire Marshal', link: '/fire-marshal-uk' },
  { name: 'Patrolling Services', link: '/patrolling-security-uk' },
  { name: 'Escort Services', link: '/escort-services-uk' },
  { name: 'Subcontracting Services', link: '/subcontracting-service-uk' },
];

const Marquee = () => {
  return (
    <div className="marquee bg-primary">
      <div className="marquee-content">
        {services.map((service, index) => (
          <Link key={index} to={service.link} className="marquee-item lg:px-32 px-6 lg:text-3xl text-base">
            {service.name}
          </Link>
        ))}
        {/* Duplicate the items for seamless transition */}
        {services.map((service, index) => (
          <Link key={index + services.length} to={service.link} className="marquee-item lg:px-32 px-6 lg:text-3xl text-xl">
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
