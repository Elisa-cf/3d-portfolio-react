import { Link } from 'react-router-dom';

import CTA from '../components/CTA';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import Header from '../components/Header';

const Projects = () => {
  return (
    <section className='max-container'>
      {/* Heading */}
      <Header title='My' subtitle='Projects' />
      {/* Introduction */}
      <div className='text-slate-500 mt-2 leading-relaxed flex flex-col gap-3'>
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. They showcase my versatility with
          frontend frameworks, with 3 built in Vue.js and 3 in React.js,
          highlighting my ability to switch seamlessly between both
          technologies.
        </p>
        <p>
          Additionally, my experience in SEO copywriting and creating niche
          websites further strengthens my skill set, blending technical
          expertise with content-driven strategies to achieve optimal results.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {/* Projects Section */}
        {projects.map(project => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel={
                    project.link.startsWith('http') ? 'noopener noreferrer' : ''
                  }
                  className='font-semibold text-blue-600'
                >
                  {project.name ===
                  'Founder, SEO-Copywriter & WordPress Developer'
                    ? 'More Info'
                    : 'Live Link'}
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      {/* Call to Action */}
      <CTA />
    </section>
  );
};

export default Projects;
