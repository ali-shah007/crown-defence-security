import React from 'react';

function PatrollingSecurityDetails() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Patrolling Security UK</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <h2 className="text-3xl font-semibold mb-4 text-white">Overview</h2>
        <p className="text-white mb-4">
          Our patrolling security services in the UK provide continuous monitoring and protection for your property. Our trained security personnel conduct regular patrols to deter potential threats and ensure the safety of your premises.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Services We Offer</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>Regular Patrols</li>
          <li>Incident Detection and Response</li>
          <li>Access Control</li>
          <li>Perimeter Security</li>
          <li>Safety Checks</li>
          <li>Detailed Reporting</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Why Choose Us?</h2>
        <p className="text-white mb-4">
          Our team of patrolling security professionals in the UK is dedicated to providing the highest level of security for your property. We use the latest techniques and adhere to all safety regulations to ensure a secure environment.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Us</h2>
        <p className="text-white">
          For more information about our patrolling security services in the UK, please contact us at <a href="tel:07460395006" className="text-yellow-500 hover:underline">0746 039 5006</a> or email us at <a href="mailto:info@crowndefencesecurity.co.uk" className="text-yellow-500 hover:underline">info@crowndefencesecurity.co.uk</a>.
        </p>
      </div>
    </div>
  );
}

export default PatrollingSecurityDetails;
