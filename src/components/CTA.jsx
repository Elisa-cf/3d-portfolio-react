import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        From web development to SEO-optimized content,{' '}
        <br className='sm:block hidden' />
        let's create!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
