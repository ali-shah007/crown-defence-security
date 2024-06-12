import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        text: "Crown Defence provided exceptional service and their professionalism was top-notch. Highly recommend them!",
        name: "John Doe",
        role: "CEO, Keku Ltd",
        photo: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=1380&t=st=1718236465~exp=1718237065~hmac=e792f9b58eca1e42b0297c41dc30fa288400654ef6470df6f767c72d96df7d05" // Replace with actual image URL
    },
    {
        text: "The security solutions offered by Crown Defence were exactly what we needed. Their team is outstanding!",
        name: "Jane Smith",
        role: "Manager, Brunkster Ltd",
        photo: "https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?w=1380&t=st=1718236488~exp=1718237088~hmac=e529845abd7c97b3f93d14a4ead21ea6af32fff865c7dd790dd59d070d94fda6" // Replace with actual image URL
    },
    
    // Add more testimonials as needed
];

const Testimonials = () => {
    return (
        <div className="testimonial-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <div className="client-info">
                            <img src={testimonial.photo} alt={`${testimonial.name} pic`} className="client-photo" />
                            <div className="client-details">
                                <p className="client-name">{testimonial.name}</p>
                                <p className="client-role">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
