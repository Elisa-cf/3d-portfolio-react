import { skills, experiences } from '../constants';
import CTA from '../components/CTA';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Header from '../components/Header';

const About = () => {
  return (
    <section className='max-container'>
      {/* Heading */}
      <Header title='Oh, hey there!' subtitle='I’m Elisa' />

      {/* Introduction */}
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Passionate Frontend Developer & SEO Copywriter based in Spain,
          dedicated to crafting efficient, user-friendly, and scalable
          applications. With a keen eye for both design and performance, I build
          seamless digital experiences that not only look great but also drive
          engagement.
        </p>
        <p>
          As an SEO copywriter, I create compelling, search-optimized content
          that attracts and retains users—turning clicks into conversions. My
          expertise bridges the gap between technical excellence and persuasive
          storytelling, ensuring every project delivers both impact and results.
        </p>
      </div>

      {/* Skills Section */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map(skill => (
            <div key={skill.name} className='block-container w-20 h-20'>
              <div className='btn-front rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain rounded-full'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className='py-12'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            After building and monetizing niche websites through my own
            business, I transitioned into working with diverse teams as a
            developer—expanding my expertise and contributing to innovative
            projects. Here’s a glimpse into my journey:
          </p>
        </div>

        {/* Vertical Timeline for Work Experience */}
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full rounded-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='object-contain rounded-full'
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                  transition: 'none',
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${experience.iconBg}`,
                  marginLeft: '-2px',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium font-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />

      {/* Call to Action */}
      <CTA />
    </section>
  );
};

export default About;
