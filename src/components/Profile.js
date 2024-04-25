import React from 'react'
import person from '../assets/images/person.png'
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import latvian from '../assets/images/latvian.png'
import spanish from '../assets/images/spanish.png'
import usa from '../assets/images/usa.png'
import club from '../assets/images/club.png'
import double from '../assets/images/double.png'
import multiple from '../assets/images/multiple.png'

function Profile() {
    return (
        <>
            <div className='profile flex justify-between'>
                <div className='flex items-center'>
                    <img src={person} width={'100px'} height={'100px'} alt='' />
                    <div className='ml-5'>
                        <h1 className='font-bold text-[20px] text-[#0A2540]'>Courtney Lewis</h1>
                        <p className='font-normal text-[12px] text-[#0A2540] opacity-75'>Ipsum is simply dummy text of the printing</p>
                        <span className='talent font-normal text-[12px]'>Raising talent</span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <div className='p-2 social mr-2'><FaInstagramSquare className='text-[20px]' /></div>
                        <div className='p-2 social mr-2'><FaFacebookF className='text-[20px]' /></div>
                        <div className='p-2 social'><FaXTwitter className='text-[20px]' /></div>
                    </div>
                    <div className='flex mt-3'>
                        <div className='flex items-center flag-tabs mr-2'>
                            <div className='mr-3'>
                                <img src={latvian} width={'18px'} height={'12px'} alt='' />
                            </div>
                            <div>

                                <p className='font-normal text-[12px]'>Latvian</p>
                                <p className='font-normal text-[12px] text-[#B8B8B8]'>Native</p>
                            </div>
                        </div>

                        <div className='flex items-center flag-tabs mr-2'>
                            <div className='mr-3'>
                                <img src={spanish} width={'18px'} height={'12px'} alt='' />
                            </div>
                            <div>
                                <p className='font-normal text-[12px]'>Spanish</p>
                                <p className='font-normal text-[12px] text-[#B8B8B8]'>Advanced</p>
                            </div>
                        </div>

                        <div className='flex items-center flag-tabs'>
                            <div className='mr-3'>
                                <img src={usa} width={'18px'} height={'12px'} alt='' />
                            </div>
                            <div>
                                <p className='font-normal text-[12px]'>English</p>
                                <p className='font-normal text-[12px] text-[#B8B8B8]'>Basic</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='club flex justify-between'>
                <div className='flex items-center'>
                    <img src={club} width={'25px'} height={'25px'} alt='' />
                    <p className='font-semibold text-[12px] ml-2'>Dynamic Force Sports Club</p>
                    <span className='academy ml-3 font-normal text-[12px]'>Academy</span>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#425466] font-normal text-[12px]'>USA, New Your, 123 Main Street</p>
                    <span className='map ml-3 font-normal text-[12px]'>Show on map</span>
                </div>
            </div>

            <div className='p-4 flex'>
                <div className='py-4 px-8 bg-[#F9F9F9] rounded-md mr-2'>
                    <p className='font-semibold text-[12px]'>Name of institute</p>
                    <p className='text-[#BCBCBC] font-normal text-[12px] text-center'>Education</p>
                </div>

                <div className='py-4 px-8 bg-[#F9F9F9] rounded-md mr-2'>
                    <img src={double} width={'32px'} height={'24px'} alt='' />
                    <p className='text-[#BCBCBC] font-normal text-[12px] text-center'>Sport</p>
                </div>

                <div className='py-4 px-8 bg-[#F9F9F9] rounded-md mr-2'>
                    <p className='font-semibold text-[12px]'>2 years</p>
                    <p className='text-[#BCBCBC] font-normal text-[12px] text-center'>Work experiences</p>
                </div>

                <div className='py-4 px-8 bg-[#F9F9F9] rounded-md mr-2'>
                    <img src={multiple} width={'97px'} height={'24px'} alt='' />
                    <p className='text-[#BCBCBC] font-normal text-[12px] text-center'>Student</p>
                </div>

                <div className='py-4 px-8 bg-[#F9F9F9] rounded-md mr-2'>
                    <p className='font-semibold text-[12px]'>Private lesson, group clases</p>
                    <p className='text-[#BCBCBC] font-normal text-[12px] text-center'>Work experiences</p>
                </div>

                <div className='py-4 px-8 bg-[#F9F9F9] rounded-md mr-2'>
                    <p className='font-semibold text-[12px]'>Kids, Pro, Amateurs</p>
                    <p className='text-[#BCBCBC] font-normal text-[12px] text-center'>Work experiences</p>
                </div>
            </div>
        </>
    )
}

export default Profile
