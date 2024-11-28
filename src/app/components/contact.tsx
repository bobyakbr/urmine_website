
'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';


export type FormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
<div className='bg-[url("/pic3.webp")] bg-center bg-fixed bg-auto bg-cover bg-opacity-90' id="contact">
<div className='bg-black bg-opacity-90 bg-auto bg-fixed h-screen'>
    <div className=' p-5 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 justify-stretch h-screen items-center'>
 
      <div className='place-self-center visible '>
        <div className=''>  <h1 className='text-2xl font-bold'>Contact</h1>
        <h3>More Info Please Contact Us!</h3></div>
      </div>

    <form onSubmit={handleSubmit(onSubmit)} className=''>
    <h1 className='text-2xl font-bold visible sm:hidden md:hidden'>Contact</h1>
    <br/>
      <div className=''>
        <input
          type='text'
          placeholder='Full Name'
          className='mb-3 w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-3'>

        <input
          type='email'
          placeholder='Email'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-3'>
        <textarea
          rows={4}
          placeholder='Message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-black hover:text-red-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Contact;