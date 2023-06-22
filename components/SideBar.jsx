import React from 'react';
import BrandLogo from '@/assets/brand-logo-combined.svg';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeLogo from '@/assets/HomeLogo.svg';
import JobsLogo from '@/assets/JobsLogo.svg';
import CompaniesLogo from '@/assets/CompaniesLogo.svg';
import EventsLogo from '@/assets/EventsLogo.svg';
import NotificationLogo from '@/assets/notifications.svg';
import MikeLogo from '@/assets/mike.png';
import SettingsLogo from '@/assets/settings.svg';
import RemoteWorkLogo from '@/assets/remote-work.png';
import SideBarLinkCard from '@/components/SideBarLinkCard';
import AllPostsLogo from '@/assets/Community.svg';
import GeneralAdviceLogo from '@/assets/general-advice.png';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '@/store/ui-slice';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SideBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [active, setActive] = useState('');

  const currentPath = router.pathname.split('/').slice(-1)[0];

  useEffect(() => {
    setActive(currentPath);
  }, [currentPath]);

  const { isSidebarOpen } = useSelector((state) => state.ui);

  const handleClick = ({ text }) => {
    setActive(text);
  };

  const targetRef = useRef();

  const handleClickOutside = (event) => {
    if (!targetRef.current.contains(event.target)) {
      dispatch(uiActions.toggleSidebar());
    }
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:block w-[17.5rem]  min-h-screen h-full flex-shrink-0 z-50 bg-white  `}>
        <div className="px-5 pt-6 ">
          <div className="flex items-center justify-between  ">
            <Link href="/admin">
              <div className="w-[100px] cursor-pointer">
                <Image src={BrandLogo} alt="Brand Logo" />
              </div>
            </Link>
            <div className="flex gap-4">
              <Image
                src={SettingsLogo}
                alt="settings"
                className="h-5 scale-[85%] hover:scale-[120%] cursor-pointer transition-all duration-200"
              />
              <Image
                src={NotificationLogo}
                alt="Notifications Logo"
                className="h-5 scale-[85%]  hover:scale-[120%] cursor-pointer transition-all duration-200"
              />
            </div>
          </div>
          <hr className="mt-3 mb-1 h-[1px] bg-[#f2f2f2]" />
        </div>
        <div className="pt-3 pb-[6.25rem] ">
          <div>
            <SideBarLinkCard
              handleClick={handleClick}
              logo={HomeLogo}
              isActive={active == 'admin'}
              text={'Home'}
              rounded={false}
              link={' '}
            />
            <SideBarLinkCard
              logo={JobsLogo}
              isActive={active == 'jobs'}
              text={'Jobs'}
              handleClick={handleClick}
              rounded={false}
              link={'jobs'}
            />
            <SideBarLinkCard
              logo={EventsLogo}
              isActive={active == 'events'}
              text={'Events'}
              handleClick={handleClick}
              rounded={false}
              link={'events'}
            />
            <SideBarLinkCard
              logo={CompaniesLogo}
              isActive={active == 'companies'}
              text={'Companies'}
              handleClick={handleClick}
              rounded={false}
              link={'admin/companies'}
            />
            <SideBarLinkCard
              logo={'https://xsgames.co/randomusers/avatar.php?g=pixel'}
              isActive={active == 'Balaganesh K'}
              text={'Balaganesh K'}
              handleClick={handleClick}
              rounded={true}
              link={'balaganesh-k'}
            />
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}

      <div
        onClick={handleClickOutside}
        className={`lg:hidden ${
          isSidebarOpen
            ? ' transform translate-x-0'
            : 'transform -translate-x-[150%] '
        }  ease-in-out w-full min-h-screen bg-black/50 fixed top-0 left-0 z-[999]`}>
        <div
          ref={targetRef}
          className={`w-[17.5rem] ${
            isSidebarOpen
              ? 'transform translate-x-0'
              : 'transform -translate-x-[150%]'
          } min-h-screen h-full flex-shrink-0 transition-all duration-500 z-50 bg-white`}>
          {/*  */}

          <div className="cursor-pointer pt-[2rem] px-[1.25rem] pb-[0.5rem]">
            <Link href="/" onClick={() => dispatch(uiActions.toggleSidebar())}>
              <Image
                src={BrandLogo}
                alt="Hamburger Logo"
                className="w-fit h-[20px] "
              />
            </Link>
          </div>
          <div className="pt-3 pb-[6.25rem] ">
            <div>
              <SideBarLinkCard
                handleClick={handleClick}
                logo={HomeLogo}
                isActive={active == 'admin'}
                text={'Home'}
                rounded={false}
                link={'home'}
              />
              <SideBarLinkCard
                logo={JobsLogo}
                isActive={active == 'jobs'}
                text={'Jobs'}
                handleClick={handleClick}
                rounded={false}
                link={'jobs'}
              />
              <SideBarLinkCard
                logo={EventsLogo}
                isActive={active == 'events'}
                text={'Events'}
                handleClick={handleClick}
                rounded={false}
                link={'events'}
              />
              <SideBarLinkCard
                logo={CompaniesLogo}
                isActive={active == 'companies'}
                text={'Companies'}
                handleClick={handleClick}
                rounded={false}
                link={'admin/companies'}
              />
              <SideBarLinkCard
                logo={'https://xsgames.co/randomusers/avatar.php?g=pixel'}
                isActive={active == 'Balaganesh K'}
                text={'Balaganesh K'}
                handleClick={handleClick}
                rounded={true}
                link={'balaganesh-k'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
