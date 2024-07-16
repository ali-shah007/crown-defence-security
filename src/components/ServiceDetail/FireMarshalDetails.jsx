import React from 'react';

function FireMarshalDetails() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Fire Marshal Services UK</h1>
      <div className="bg-red-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <h2 className="text-3xl font-semibold mb-4 text-white">Overview</h2>
        <p className="text-white mb-4">
          Ensuring fire safety on your premises is essential to prevent fire hazards and ensure compliance with regulations. Our fire marshal services are designed to provide comprehensive fire safety solutions tailored to your needs.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Services We Offer</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>Fire Risk Assessments</li>
          <li>Fire Safety Training</li>
          <li>Fire Drill Coordination</li>
          <li>Emergency Evacuation Planning</li>
          <li>Fire Extinguisher Maintenance</li>
          <li>On-Site Fire Marshals</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Why Choose Us?</h2>
        <p className="text-white mb-4">
          Our team of certified fire marshals in the UK is committed to ensuring your premises are fire-safe. We utilize the latest techniques and adhere to strict safety regulations to provide you with the best fire safety solutions.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Us</h2>
        <p className="text-white">
          For more information about our fire marshal services in the UK, please contact us at <a href="tel:07460395006" className="text-blue-500 hover:underline">0746 039 5006</a> or email us at <a href="mailto:info@crowndefencesecurity.co.uk" className="text-blue-500 hover:underline">info@crowndefencesecurity.co.uk</a>.
        </p>
      </div>
    </div>
  );
}

export default FireMarshalDetails;
