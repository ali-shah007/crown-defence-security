import React from 'react';

function ConstructionDetails() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Construction Site Security UK</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <h2 className="text-3xl font-semibold mb-4 text-white">Overview</h2>
        <p className="text-white mb-4">
          Ensuring the safety and security of construction sites in the UK is crucial to prevent theft, vandalism, and unauthorized access. Our comprehensive construction site security services are designed to protect your assets and ensure a safe working environment.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Services We Offer</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>24/7 On-Site Security Personnel</li>
          <li>Access Control and Monitoring</li>
          <li>Surveillance Systems and CCTV Monitoring</li>
          <li>Mobile Patrols</li>
          <li>Incident Reporting and Response</li>
          <li>Safety and Compliance Checks</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Why Choose Us?</h2>
        <p className="text-white mb-4">
          Our team of experienced security professionals in the UK is dedicated to providing top-notch security solutions tailored to the unique needs of construction sites. We use the latest technology and proven strategies to ensure the highest level of protection for your site.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Us</h2>
        <p className="text-white">
          For more information about our construction site security services in the UK, please contact us at <a href="tel:07460395006" className="text-blue-500 hover:underline">0746 039 5006</a> or email us at <a href="mailto:info@crowndefencesecurity.co.uk" className="text-blue-500 hover:underline">info@crowndefencesecurity.co.uk</a>.
        </p>
      </div>
    </div>
  );
}

export default ConstructionDetails;
