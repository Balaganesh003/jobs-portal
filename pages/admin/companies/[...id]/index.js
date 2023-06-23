import React from 'react';
import FilterCard from '@/components/FilterCard';
import CompanyPage from '@/components/CompanyPage';
import { useRouter } from 'next/router';

const Filters = [
  {
    name: 'Proofs',
    link: 'proofs',
  },
  {
    name: 'Job/Internships',
    link: 'jobandinternships',
  },
  {
    name: 'Dream Careers',
    link: 'dreamcareers',
  },
];
const Companies = ({}) => {
  const router = useRouter();

  const companyId =
    router.query.id?.length > 0 ? router.query.id[0] : router.query.id;

  return (
    <div className="">
      <div className="w-full border-b sticky top-0 z-10 border-gray-border">
        <div className="h-full w-full max-w-[62.5rem] mx-auto border-b border-gray-border flex  bg-white items-center z-10 justify-end">
          <div className="sm:max-w-[62.5rem]   overflow-x-auto flex  ">
            <div className="flex flex-nowrap sm:flex-wrap">
              {Filters.map((filter, i) => (
                <FilterCard
                  key={i}
                  companyId={companyId}
                  name={filter.name}
                  link={`${filter.link}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[62.5rem] w-full min-h-screen h-full mx-auto  mt-5 z-0">
        {/* Cards section */}
        <div className="">
          <CompanyPage />
        </div>
      </div>
    </div>
  );
};

export default Companies;
