'use client';

import { useForm } from 'react-hook-form';

type FormInput = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

  return (
    <form className='w-full rounded-md bg-[#1d1e34] p-5 py-14 shadow-lg'>
      <input
        className='mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-white outline-none focus:border-stone-800 border-none md:mb-0 bg-[#334155]'
        type='text'
        placeholder='Name'
        required
        {...register('name')}
      />
      <input
        className='mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-white outline-none focus:border-stone-800 border-none md:mb-0 bg-[#334155]'
        type='email'
        placeholder='Email'
        required
        {...register('email')}
      />
      <input
        className='mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-white outline-none focus:border-stone-800 border-none md:mb-0 bg-[#334155]'
        type='tel'
        placeholder='Phone'
        required
        {...register('phone')}
      />
      <textarea
        className='mt-4 mb-5 block w-full rounded-md border px-3 text-white outline-none focus:border-stone-800 border-none md:mb-0 bg-[#334155]'
        placeholder='Message'
        rows={6}
        required
        {...register('message')}
      />

      <button
        disabled={isSubmitting}
        type='submit'
        className='bg-blue-700 px-6 py-3 disabled:bg-gray-500 !block-primary rounded-md cursor-pointer text-white mt-4 font-bold'
      >
        Send enquiry
      </button>
    </form>
  );
}
