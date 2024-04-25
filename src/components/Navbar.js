import React from 'react'
import volleyball from '../assets/images/volleyball.png'
import tennis from '../assets/images/tennis.png'
import union from '../assets/images/union.png'
import location from '../assets/images/location.png'
import frame from '../assets/images/frame.png'
import profile from '../assets/images/profile.png'

function Navbar() {
    return (
        <div className='p-5 flex h-14 items-center'>
            <div className='flex'>
                <img className='mr-3' src={volleyball} width={'16px'} height={'16px'} alt='' />
                <img className='mr-3' src={tennis} width={'16px'} height={'16px'} alt='' />
                <img src={union} width={'16px'} height={'16px'} alt='' />
            </div>
            <div className='flex ml-6'>
                <img src={location} width={'16px'} height={'16px'} alt='' />
                <span className='font-bold text-[12px] ml-2'>Latvia</span>
            </div>

            <form class="max-w-md ml-12">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Search" required />
                </div>
            </form>

            <div className='frame ml-36 mr-4 rounded-md'>
                <img src={frame} width={'16px'} height={'16px'} alt='' />
            </div>
            <div className="text-white booking mr-4 rounded-lg px-4 py-2 text-center inline-flex items-center">
                <svg className='mr-2' width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5C8.13811 9.49657 8.25648 9.45201 8.36302 9.35945L11.3658 6.69246C11.4526 6.61361 11.5 6.52106 11.5 6.40793C11.5 6.17826 11.2948 6 11.0304 6C10.9042 6 10.7858 6.04456 10.695 6.12341L8 8.52302L5.30496 6.12341C5.2142 6.04456 5.09977 6 4.96956 6C4.70519 6 4.5 6.17826 4.5 6.40793C4.5 6.51763 4.54735 6.61361 4.63416 6.69246L7.64092 9.35945C7.74352 9.45544 7.86189 9.5 8 9.5Z" fill="#FF5733" />
                </svg>

                Booking
            </div>

            <div className="text-white pricing bg-gradient-to-r from-red-400 via-red-400 to-red-300 rounded-lg px-4 py-2 text-center inline-flex items-center">
                <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 6.66667V13.3333C14.6667 13.5101 14.5964 13.6797 14.4714 13.8047C14.3464 13.9298 14.1768 14 14 14H2.00001C1.8232 14 1.65363 13.9298 1.52861 13.8047C1.40358 13.6797 1.33334 13.5101 1.33334 13.3333V6.66667H14.6667ZM14.6667 5.33333H1.33334V2.66667C1.33334 2.48986 1.40358 2.32029 1.52861 2.19526C1.65363 2.07024 1.8232 2 2.00001 2H14C14.1768 2 14.3464 2.07024 14.4714 2.19526C14.5964 2.32029 14.6667 2.48986 14.6667 2.66667V5.33333ZM10 10.6667V12H12.6667V10.6667H10Z" fill="white" />
                </svg>
                Pricing
            </div>

            <img className='ml-24' src={profile} width={'32px'} height={'32px'} alt='' />
            <div className='ml-4'>
                <h3 className='font-bold text-[12px]'>Shahid Miah</h3>
                <p className='font-normal text-[12px] text-[#86909F]'>vID: #NR001</p>
            </div>
        </div>
    )
}

export default Navbar
