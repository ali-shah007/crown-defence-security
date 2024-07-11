import React from 'react';
import PageTopComponent from '../components/PageTopComponent/PageTopComponent';

function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start mt-10 pb-10">
      <div className="absolute inset-0 bg-gray-900 "></div>
      <div className="relative w-full">
        <PageTopComponent type='About'/>
      </div>
      <div className="relative max-w-4xl text-center p-8 text-white mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Crown Defence Security Ltd</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Your premier security guarding company based in the UK. With years of experience in the security industry, we are dedicated to providing top-notch security services to ensure the safety and protection of our clients. Our team of highly trained and professional security personnel is committed to delivering exceptional service, tailored to meet your specific needs.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Values</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          - Integrity, honesty, and transparency guide every aspect of our operations.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          - We respect and value our people, both within our team and among our clients.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          - As a considerate contractor, we demonstrate our commitment to customers and employees alike.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          - Our workforce is skilled, qualified, and committed to excellence.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Objectives</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          - Continuously monitoring, reviewing, and enhancing our processes to ensure ongoing improvement.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          - Building enduring partnerships with our clients through dedication and reliability.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          - Ensuring our employees receive the training, motivation, and support they need to excel.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Trust Crown Defence Security Ltd to be your reliable partner in security. Contact us today to learn more about our services and how we can help you achieve peace of mind.
        </p>
      </div>
    </div>
  );
}

export default About;
