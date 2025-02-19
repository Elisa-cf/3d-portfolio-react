import React, { useState, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = e => setCurrentAnimation('walk');
  const handleBlur = e => setCurrentAnimation('idle');

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Elisa Canyelles',
          from_email: form.email,
          to_email: 'elisacanyelles@gmail.com',
          message: `You got a new message from ${form.name} (${form.email}):\n\n${form.message}`,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: 'Message sent successfully!',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation('idle');
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        error => {
          setIsLoading(false);
          console.error(error);
          setCurrentAnimation('idle');

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch!</h1>
        <form
          ref={formRef}
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input w-full'
              placeholder='Paquita'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input w-full'
              placeholder='paquitasalas@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold block w-full'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea w-full mt-2'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:1/2 w-full lg:h-auto md:h-[550 px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              scale={[0.5, 0.5, 0.5]}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
