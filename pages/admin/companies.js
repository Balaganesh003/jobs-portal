import React, { useEffect } from 'react';
import FilterCard from '@/components/FilterCard';
import { useState } from 'react';
import GridComponent from '@/components/CompaniesGrid';
import CompaniesModal from '@/components/CompaniesModal';
import { useSelector } from 'react-redux';

const Companies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { companiesList } = useSelector((state) => state.company);

  useEffect(() => {}, [companiesList]);

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
            <GridComponent items={companiesList} />
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

export default Companies;
