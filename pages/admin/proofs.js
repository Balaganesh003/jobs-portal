import React from 'react';
import { useState } from 'react';
import ModalLayout from '@/components/ModalLayout';
import ProofsModal from '@/components/ProofsModal';

const Proofs = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [choosenProof, setChoosenProof] = useState(null);

  const handelModalOpen = () => {
    setIsModalOpen(true);
    setChoosenProof(null);
    document.body.style.overflow = 'hidden';
  };

  const handelModalClose = () => {
    setIsModalOpen(false);
    setChoosenProof(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <div className=" bg-white overflow-y-auto">
        <div className="max-w-[62.5rem] w-full   mx-auto z-0">
          {/* Search Field */}

          {/* Cards section */}
          <div className="lg:pt-[2.25rem] p-[0.9375rem] ">
            <div className="flex justify-end">
              <div
                onClick={() => handelModalOpen()}
                className="px-[14.5px] flex-shrink-0 py-[6px] my-[4px] mr-2 border border-black rounded w-fit h-[35px]">
                <p className="text-[0.875rem] leading-[150%] font-semibold text-primary-text captilize cursor-pointer">
                  Add Proofs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <ModalLayout isModalOpen={isModalOpen} handelClose={handelModalClose}>
        <ProofsModal
          choosenProof={choosenProof}
          setChoosenProof={setChoosenProof}
          handelModalClose={handelModalClose}
        />
      </ModalLayout>
    </div>
  );
};

export default Proofs;
