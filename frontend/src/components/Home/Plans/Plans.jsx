import React from 'react';
import { Link, useLocation } from "react-router-dom";
const Plans = () => {
  const plans = [
    {
      title: 'Basic Fitness',
      price: '$29',
      features: ['Gym Access', 'Basic Equipment', 'Open Gym Hours'],
      href: 'https://wa.me/918918829471?text=plan_basic'
    },
    {
      title: 'Advanced Training',
      price: '$49',
      features: ['Gym Access', 'All Equipment', 'Group Classes', 'Personalized Plan'],
      href: 'https://wa.me/918918829471?text=plan_advanced'
    },
    {
      title: 'Elite Membership',
      price: '$79',
      features: ['Gym Access', 'All Equipment', 'Unlimited Classes', 'Personal Training', 'Nutrition Guidance', '24/7 Access'],
      href: 'https://wa.me/918918829471?text=plan_elite'
    },
  ];

  return (
    <section className='p-[4vw] m-[4vw] w-[92vw]'>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#A2FF00' }}>Our Plans</h2>
      <p>Embark on Your Fitness Transformation: Explore Our Comprehensive Membership Plans Designed to Help You Achieve Your Unique Goals, Whether You're Just Starting Out or Aiming for Peak Performance.</p>
      <div className='my-8' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              border: '2px solid #A2FF00',
              padding: '2rem',
              borderRadius: '10px',
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#A2FF00' }}>{plan.title}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>{plan.price}/month</p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem', height: '70%' }}>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={plan.href}>
                <button
                  style={{
                    backgroundColor: '#A2FF00',
                    color: 'black',
                    padding: '0.8rem 1.5rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#80e000')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#A2FF00')}
                >
                  Know More
                </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;