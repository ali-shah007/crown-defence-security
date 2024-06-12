import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Forms() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        });
  
      e.target.reset(); // Reset the form fields
    };
  return (
    <div>
        <div className='bg-gray-900 bg-opacity-90 p-8 rounded-md shadow-md max-w-md w-full '>
        <h2 className='text-2xl font-bold mb-4 text-center text-gray-100'>Get Free Quote</h2>
        <form ref={form} onSubmit={sendEmail} className='space-y-4'>
          <div className='flex space-x-4'>
            <input
              type='text'
              name='company_name'
              placeholder='Company Name'
              className='mt-1 block w-1/2 px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
              required
            />
            <input
              type='tel'
              name='contact_number'
              placeholder='Contact Number'
              className='mt-1 block w-1/2 px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
              required
            />
          </div>
          <div className='flex space-x-4'>
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              className='mt-1 block w-1/2 px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
              required
            />
            <input
              type='email'
              name='user_email'
              placeholder='Email'
              className='mt-1 block w-1/2 px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
              required
            />
          </div>
          <div className='flex space-x-4'>
            <input
              type='text'
              name='address'
              placeholder='Address'
              className='mt-1 block w-1/2 px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
            />
            <input
              type='text'
              name='postal_code'
              placeholder='Postal Code'
              className='mt-1 block w-1/2 px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
            />
          </div>
          <div>
            <select
              name='security_type'
              className='mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
              required
            >
              <option value='' disabled selected>Choose Security Type</option>
              <option value='Corporate Office Security'>Corporate Office Security</option>
              <option value='Concierge Security'>Concierge Security</option>
              <option value='Construction Security'>Construction Security</option>
              <option value='Event Security'>Event Security</option>
              <option value='Hotel Security'>Hotel Security</option>
              <option value='Retail Security'>Retail Security</option>
              <option value='Industrial and Warehouse Security'>Industrial and Warehouse Security</option>
              <option value='Fire Marshal'>Fire Marshal</option>
              <option value='Dog Security'>Dog Security</option>
              <option value='Key Holding'>Key Holding</option>
              <option value='Mobile Patrols'>Mobile Patrols</option>
              <option value='Traffic Marshals'>Traffic Marshals</option>
            </select>
          </div>
          <div>
            <select
              name='how_did_you_hear'
              className='mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
              required
            >
              <option value='' disabled selected>How Did You Hear About Us?</option>
              <option value='Google'>Google</option>
              <option value='Facebook'>Facebook</option>
              <option value='Instagram'>Instagram</option>
              <option value='Referral'>Referred by Friend</option>
              <option value='advertisement'>Advertisement</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div>
            <textarea
              name='message'
              placeholder='Message (max 500 characters)'
              className='mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-color focus:border-brand-color sm:text-sm bg-gray-800 text-gray-300'
              rows='4'
              maxLength='500'
             
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-900 bg-brand-color hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-color'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Forms