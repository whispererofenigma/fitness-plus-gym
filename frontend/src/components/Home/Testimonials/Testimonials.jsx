import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Joining this gym was the best decision I've made! The personalized training and supportive environment helped me achieve my fitness goals faster than I ever thought possible.",
      author: "Sarah M.",
      image: "https://via.placeholder.com/80", // Replace with actual image URL
    },
    {
      quote: "The group classes are amazing! I've never felt so motivated and energized. The trainers are top-notch, and the community is incredibly welcoming.",
      author: "John D.",
      image: "https://via.placeholder.com/80", // Replace with actual image URL
    },
     {
      quote: "The elite membership is worth every penny. the nutritional guidance combined with the personal training has changed my life.",
      author: "Emily R.",
      image: "https://via.placeholder.com/80", // Replace with actual image URL
    },
  ];

  return (
    <section className='p-[4vw] m-[4vw] w-[92vw]'>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-[#a2ff00]">What Our Members Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-[#222] rounded-[10px] "
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="rounded-full mb-4 w-20 h-20 object-cover"
              />
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-[#a2ff00]">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;