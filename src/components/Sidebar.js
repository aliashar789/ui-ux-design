import React, { useState } from 'react';
import {
  FaFileImage
} from "react-icons/fa";
import { MdChevronLeft, MdDashboard } from "react-icons/md";
import logo from '../assets/images/logo.png'
import { RiBuilding2Fill, RiHome3Fill } from 'react-icons/ri';
import { TbTournament } from 'react-icons/tb';
import { FaPersonCircleCheck, FaPersonWalking } from 'react-icons/fa6';
import { IoIosMedal } from 'react-icons/io';
import { BsMicrosoftTeams } from 'react-icons/bs';
import { IoNewspaper } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <div className={`bg-white text-black h-screen transition-all duration-500 ${isOpen ? 'w-[252px]' : 'w-[55px]'}`}>
        <div className='p-4'>
          <div className="flex items-center pb-8 pt-5">
            <img src={logo} width={'140px'} height={'23px'} className={`${isOpen ? 'block' : 'hidden'}`} alt='logo' />
            <div className={`flex text-[25px] cursor-pointer ${isOpen ? 'ml-12' : 'ml-0'}`}>
              {isOpen ? <MdChevronLeft onClick={toggle} className='left-icon' /> : <LuMenu onClick={toggle} />}
            </div>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-linkk ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500 border border-slate-200`}>
              <div className="text-[20px] hover-icon"><MdDashboard /></div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px] ml-4`}>Dashboard</div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><RiHome3Fill className='' /></div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px] ml-4 `}>Home</div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><IoIosMedal className='' />
              </div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px] ml-4`}>Leagues</div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><TbTournament className='' />
              </div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px]  ml-4`}>Tournaments</div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><FaPersonWalking className='' />
              </div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px]  ml-4`}>Athletes </div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><BsMicrosoftTeams className='' />
              </div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px]  ml-4`}>Teams </div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><FaPersonCircleCheck className='' />
              </div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px]  ml-4`}>Coaches </div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><RiBuilding2Fill className='' />
              </div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px]  ml-4`}>Clubs </div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><FaFileImage className='' />
              </div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px]  ml-4`}>Federations </div>
            </a>
          </div>
          <div className='my-2'>
            <a href='/' className={`flex text-black hover-link ${isOpen ? 'px-2 py-3 rounded-md' : 'my-5'} gap-2 transition-all duration-500`}>
              <div className="text-[20px] hover-icon"><IoNewspaper className='' />
              </div>
              <div className={`${isOpen ? 'block' : 'hidden'} text-[12px]  ml-4`}>News </div>
            </a>
          </div>
        </div>
      </div>
      <main className="w-3/4 main">{children}</main>
    </div>
  );
};

export default Sidebar;