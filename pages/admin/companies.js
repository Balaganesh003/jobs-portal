import React, { useEffect } from 'react';
import FilterCard from '@/components/FilterCard';
import { useState } from 'react';
import GridComponent from '@/components/CompaniesGrid';
import Image from 'next/image';
import BlackDownTriangle from '@/assets/BlackDownTriangle.svg';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';
import SearchLogo from '@/assets/SearchLogo.svg';
import CompaniesModal from '@/components/CompaniesModal';

const links = [
  { label: 'Google', url: 'https://www.google.com' },
  { label: 'Facebook', url: 'https://www.facebook.com' },
  { label: 'Twitter', url: 'https://www.twitter.com' },
  { label: 'Google', url: 'https://www.google.com' },
  { label: 'Facebook', url: 'https://www.facebook.com' },
  { label: 'Twitter', url: 'https://www.twitter.com' },
  { label: 'Google', url: 'https://www.google.com' },
  { label: 'Facebook', url: 'https://www.facebook.com' },
  { label: 'Twitter', url: 'https://www.twitter.com' },
  { label: 'Google', url: 'https://www.google.com' },
  { label: 'Facebook', url: 'https://www.facebook.com' },
  { label: 'Twitter', url: 'https://www.twitter.com' },
  { label: 'Google', url: 'https://www.google.com' },
  { label: 'Facebook', url: 'https://www.facebook.com' },
  { label: 'Twitter', url: 'https://www.twitter.com' },
  { label: 'Google', url: 'https://www.google.com' },
  { label: 'Facebook', url: 'https://www.facebook.com' },
  { label: 'Twitter', url: 'https://www.twitter.com' },
];

const JobsAndCompanies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" bg-white overflow-y-auto">
      <div className="max-w-[62.5rem] w-full min-h-screen max-h-screen mx-auto z-0">
        {/* Search Field */}

        {/* Cards section */}
        <div className="  pt-[2.25rem] p-[0.9375rem] ">
          <div className="flex justify-end">
            <FilterCard name={'Add Company'} setIsModalOpen={setIsModalOpen} />
          </div>
          <div className="w-full mt-4">
            <GridComponent items={links} />
          </div>
        </div>
        {/* Modal */}
        <CompaniesModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default JobsAndCompanies;
