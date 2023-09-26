// 'use client';

// import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import PropertyList from '@/components/PropertyList';
import { groq } from 'next-sanity';
import { Property } from '@/types';
import { client } from '@/sanity/lib/client';
import { getProperties } from '@/sanity/lib/utils';
import SectionTitle from '@/components/SectionTitle';

type Props = {};

export const dynamic = 'force-dynamic';

export default async function HomePage({}: Props) {
  const properties = await getProperties();

  console.log(properties);

  return (
    <div className='md:px-20 xxl:mx-auto xxl:w-6/12'>
      <Hero />
      <Search />

      <SectionTitle title='Latest Properties' />
      <div className='properties'>
        <PropertyList properties={properties} />
      </div>
    </div>
  );
}
