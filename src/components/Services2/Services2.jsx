import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import constructionbg from '../../assets/construction.webp';
import monitoringbg from '../../assets/monitoring.webp';
import trafficbg from '../../assets/traffic.webp';
import firebg from '../../assets/fire.webp';
import keybg from '../../assets/key.webp';
import subbg from '../../assets/subcontracting.webp';
import carbg from '../../assets/car.webp';
import dogbg from '../../assets/dog.webp';

const ServiceSection = ({ imageSrc, title, link, description, bgColor, textColor, reverse }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideDirection = reverse ? 'slide-in-left' : 'slide-in-right';

  return (
    <div className='w-full lg:h-[600px] h-auto'>
      <div className={`relative flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center items-center`}>
        <div ref={ref} className={`w-full lg:w-1/2 relative ${inView ? 'slide-in' : slideDirection}`}>
          <img
            src={imageSrc}
            alt=''
            className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
          />
          <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>{title}</h1>
        </div>
        <div className={`w-full lg:w-1/2 text-center ${bgColor} lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10 ${inView ? 'slide-in' : slideDirection}`}>
          <h1 className={`text-4xl font-normal ${textColor} mb-6`}>{title}</h1>
          <p className={`${textColor === 'text-primary' ? 'text-white' : textColor} mb-6`}>{description}</p>
          <Link to={link} className={`text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200`}>Find out more</Link>
        </div>
      </div>
    </div>
  );
};


function Services2() {
  return (
    <div className='flex flex-col'>
      <ServiceSection
        imageSrc={constructionbg}
        title='Construction Security'
        link='/construction-site-security-uk'
        description='Ensure the safety and security of your construction site with our dedicated security services. Our trained guards are skilled in preventing theft, vandalism, and unauthorized access, safeguarding your valuable assets and ensuring smooth project progression.'
        bgColor='bg-[#343A40]'
        textColor='text-primary'
      />
      <ServiceSection
        imageSrc={firebg}
        title='Fire Marshals'
        link='/fire-marshal-uk'
        description='Our certified fire marshals are experts in fire prevention and emergency response. They conduct regular inspections, enforce fire safety regulations, and are always prepared to act swiftly in case of a fire, ensuring the safety of your property and personnel.'
        bgColor='bg-primary'
        textColor='text-[#333]'
        reverse
      />
      <ServiceSection
        imageSrc={trafficbg}
        title='Traffic Marshals'
        link='/traffic-marshal-uk'
        description='Managing traffic flow and ensuring safety on construction sites and events is critical. Our traffic marshals are trained to direct vehicles and pedestrians efficiently, minimizing risks and ensuring smooth operations in busy environments.'
        bgColor='bg-gray-900'
        textColor='text-primary'
      />
      <ServiceSection
        imageSrc={dogbg}
        title='Dog Handler Security'
        link='/dog-handler-security-uk'
        description='Our highly trained dog handler teams provide an effective security solution for various environments. With keen senses and rigorous training, our security dogs and handlers are excellent deterrents against intruders and can detect threats swiftly.'
        bgColor='bg-white'
        textColor='text-[#333]'
        reverse
      />
      <ServiceSection
        imageSrc={carbg}
        title='Patrolling Security'
        link='/patrolling-security-uk'
        description='Our patrolling security services ensure continuous surveillance and monitoring of your premises. With regular and random patrols, our security personnel detect and deter suspicious activities, providing a robust layer of security for your property.'
        bgColor='bg-[#343A40]'
        textColor='text-primary'
      />
      <ServiceSection
        imageSrc={keybg}
        title='Key Holding Services'
        link='/key-holding-service-uk'
        description='Crown Defence Security Ltd offers professional key holding services, ensuring that your keys are securely stored and accessible only to authorized personnel. We provide rapid response services, attending to alarms and emergencies promptly.'
        bgColor='bg-primary'
        textColor='text-[#333]'
        reverse
      />
      <ServiceSection
        imageSrc={monitoringbg}
        title='CCTV Monitoring'
        link='/cctv-monitoring-uk'
        description='Enhance your security with our comprehensive CCTV monitoring services. Our experienced operators keep a vigilant eye on your premises, detecting and responding to any suspicious activity in real-time, ensuring your property remains safe and secure.'
        bgColor='bg-gray-900'
        textColor='text-primary'
      />
      <ServiceSection
        imageSrc={carbg}
        title='Escort Services'
        link='/escort-services-uk'
        description='Our professional escort services ensure the safety and security of individuals and assets during transit. Whether for personal protection or secure transportation of valuable items, our experienced security personnel provide reliable and discreet escort services.'
        bgColor='bg-[#343A40]'
        textColor='text-primary'
        reverse
      />
      <ServiceSection
        imageSrc={subbg}
        title='Subcontracting Services'
        link='/subcontracting-service-uk'
        description='Crown Defence Security Ltd offers reliable subcontracting services, providing trained and professional security personnel to meet your specific needs. Our team integrates seamlessly with your operations, ensuring high standards and efficient security solutions.'
        bgColor='bg-primary'
        textColor='text-[#333]'
      />
    </div>
  );
}

export default Services2;
