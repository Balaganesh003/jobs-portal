import React, { useEffect } from 'react';
import FilterCard from '@/components/FilterCard';
import { useState } from 'react';
import GridComponent from '@/components/CompaniesGrid';
import CompaniesModal from '@/components/CompaniesModal';
import { useSelector } from 'react-redux';

const Companies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handelModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const { companiesList } = useSelector((state) => state.company);

  useEffect(() => {}, [companiesList]);

  return (
    <div className=" bg-white overflow-y-auto">
      <div className="max-w-[62.5rem] w-full   mx-auto z-0">
        {/* Search Field */}

        {/* Cards section */}
        <div className="  pt-[2.25rem] p-[0.9375rem] ">
          <div className="flex justify-end">
            <FilterCard
              name={'Add Company'}
              handelModalOpen={handelModalOpen}
            />
          </div>
          <div className="w-full mt-4">
            <GridComponent items={companiesList} />
          </div>
        </div>
        {/* Modal */}
        <CompaniesModal
          isModalOpen={isModalOpen}
          handelModalOpen={handelModalOpen}
          handelModalClose={handelModalClose}
        />
      </div>
    </div>
  );
};

export default Companies;
