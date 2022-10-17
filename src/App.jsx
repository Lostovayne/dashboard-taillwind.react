import React, { useState } from 'react';

import {
    RiDashboardLine,
    RiBriefcaseLine,
    RiCalendar2Line,
    RiMessage2Line,
    RiLogoutBoxRLine,
    RiMenu3Fill,
    RiCloseLine,
    RiNotification3Line,
    RiArrowDownSLine,
    RiSearchLine,
    RiCheckboxBlankCircleFill,
    RiFilter3Line,
    RiMapPinLine,
    RiDropboxFill,
    RiTwitchLine,
    RiGoogleLine,
    RiAmazonLine,
} from 'react-icons/ri';

function App() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6 w-full  '>
            {/* Sidebar */}
            <div
                className={`fixed lg:static w-[65%]  md:w-[45%] lg:w-full top-0 ${
                    sidebar ? 'left-0' : '-left-full'
                }  
                w-full h-full  overflow-y-scroll lg:overflow-hidden   
                col-span-1 p-8 border-r border-gray-100 bg-white transition-all z-50 `}>
                {/* Logotipo */}
                <div className='text-center p-8 '>
                    <h1 className='uppercase font-bold tracking-[4px]'>
                        Tu logo
                    </h1>
                </div>

                <div className='flex flex-col justify-between h-[800px] '>
                    {/* Menu */}
                    <nav>
                        <ul>
                            <li>
                                <a
                                    href='#'
                                    className='flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold '>
                                    <RiDashboardLine />
                                    Dashboard
                                </a>
                            </li>

                            <li>
                                <a
                                    href='#'
                                    className='flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold '>
                                    <RiBriefcaseLine />
                                    Job Board
                                </a>
                            </li>

                            <li>
                                <a
                                    href='#'
                                    className='flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold '>
                                    <RiCalendar2Line />
                                    Shedule
                                </a>
                            </li>

                            <li>
                                <a
                                    href='#'
                                    className='flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold '>
                                    <RiMessage2Line />
                                    Messenger
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* IMAGENES Y LOGOUT */}

                    <div className='flex flex-col gap-4'>
                        <img src='img.svg' alt='imagen' />

                        {/* UPDATE */}
                        <div className='bg-purple-50 p-8 flex flex-col gap-4 rounded-3xl '>
                            <h3 className='text-xl text-center '>
                                Get Upgrade
                            </h3>
                            <p className='text-gray-500 text-center'>
                                Lorem ipsum, dolor sit amet consectetur{' '}
                            </p>

                            <button className='bg-purple-600 text-white p-2 rounded-lg'>
                                Lear more
                            </button>
                        </div>

                        <a
                            href='#'
                            className='flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold'>
                            <RiLogoutBoxRLine />
                            Log out
                        </a>
                    </div>
                </div>
            </div>
            {/* Btn menu movile */}
            <button
                onClick={handleSidebar}
                className='fixed bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl block lg:hidden z-40 '>
                {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>

            {/* Content */}

            <div className='col-span-5'>
                {/* Header */}

                <header className='flex flex-col md:px-8  md:flex-row gap-4 items-center justify-between p-4 lg:px-12 w-full '>
                    {/* Search */}
                    <form className=' w-full lg:w-[30%] md:w-[40%]  order-1 md:order-none '>
                        <div className='relative '>
                            <RiSearchLine className='absolute left-2 top-3 text-gray-500' />
                            <input
                                type='text'
                                className='bg-gray-100 py-2 pl-8 pr-4  outline-none rounded-lg w-full '
                                placeholder='Search'
                            />
                        </div>
                    </form>

                    {/* Notifications */}
                    <nav className=' w-full lg:w-[70%] md:w-[60%]  flex justify-center  md:justify-end '>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <a href='#' className='relative'>
                                    <RiNotification3Line className='text-xl text-gray-500' />
                                    <RiCheckboxBlankCircleFill className='absolute   -right-1 -top-1 text-sm text-red-500' />
                                </a>
                            </li>
                            <li>
                                <a href='#' className='flex items-center gap-1'>
                                    Franko Barrera
                                    <RiArrowDownSLine />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* Content */}
                <div className=' p-4 lg:p-12 md:p-8 bg-gray-100'>
                    {/* Title */}
                    <div className='mb-8'>
                        <h1 className='text-3xl font-semibold '>Job Board</h1>
                    </div>

                    {/* Search */}
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 item-center mb-6 '>
                        <form className=' col-span-1 mb:col-span-2 '>
                            <div className='relative '>
                                <RiSearchLine className='absolute left-2 top-3 text-purple-600' />
                                <input
                                    type='text'
                                    className='bg-white py-2 pl-8 pr-4  outline-none w-full '
                                    placeholder='Search'
                                />
                            </div>
                        </form>

                        <form className='col-span-1 '>
                            <div className='relative '>
                                <RiMapPinLine className='absolute left-2 top-3 text-purple-600' />
                                <select
                                    type='text'
                                    className='bg-white py-[9px] pl-8 pr-4  outline-none w-full '>
                                    <option>Anywhere</option>
                                </select>
                            </div>
                        </form>
                        <form className=' col-span-1'>
                            <div className='relative '>
                                <RiFilter3Line className='absolute left-2 top-3 text-purple-600' />
                                <input
                                    type='text'
                                    className='bg-white py-2 pl-8 pr-4  outline-none w-full '
                                    placeholder='Filters'
                                />
                                <span className='absolute right-2 top-[7px] text-sm bg-purple-600 text-white py-1 px-[10px] rounded-full'>
                                    4
                                </span>
                            </div>
                        </form>
                    </div>

                    {/* Buttons */}

                    <div className='flex item-center flex-wrap  gap-4 mb-16'>
                        <span className='bg-white flex items-center gap-4 py-2 pl-4  pr-6 rounded-full  '>
                            <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs '>
                                <RiCloseLine />
                            </button>
                            <span className='text-gray-500'>Design</span>
                        </span>

                        <span className='bg-white flex items-center gap-4 py-2 pl-4  pr-6 rounded-full  '>
                            <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs '>
                                <RiCloseLine />
                            </button>
                            <span className='text-gray-500'>Regular</span>
                        </span>

                        <span className='bg-white flex items-center gap-4 py-2 pl-4  pr-6 rounded-full  '>
                            <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs '>
                                <RiCloseLine />
                            </button>
                            <span className='text-gray-500'>Full Time</span>
                        </span>

                        <span className='bg-white flex items-center gap-4 py-2 pl-4  pr-6 rounded-full  '>
                            <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs '>
                                <RiCloseLine />
                            </button>
                            <span className='text-gray-500'>BSB</span>
                        </span>

                        <button className='text-gray-500 ml-4'>
                            Clear All
                        </button>
                    </div>

                    {/* Results */}

                    <div className=' flex items-center justify-between mb-8 '>
                        <p className='text-gray-500'>
                            We've found{' '}
                            <span className='text-purple-600 font-semibold'>
                                523
                            </span>{' '}
                            jobs!
                        </p>

                        <p className='flex items-center gap-2 '>
                            Sort by:{' '}
                            <span className='text-purple-600 font-semibold hover:cursor-pointer '>
                                Date
                            </span>{' '}
                            <RiArrowDownSLine />
                        </p>
                    </div>

                    {/* CARD */}
                    <a
                        href='#'
                        className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full   shadow-lg hover:border-purple-300 transition-all border-2 border-transparent mb-4 '>
                        {/* ICONO */}
                        <div className='  w-full  md:w-[7%] flex items-center  justify-start md:justify-center lg:justify-start '>
                            <RiDropboxFill className='text-7xl rounded-md bg-purple-100 text-purple-600 p-3' />
                        </div>

                        {/* Title card */}
                        <div className=' w-full md:w-[73%] '>
                            <h1 className='text-xl flex items-center gap-4 mb-2'>
                                UX Designer
                                <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>
                                    Remote
                                </span>
                                <span className='text-xs py-1 px-2 bg-green-100 text-green-600 font-bold'>
                                    Sketch
                                </span>
                            </h1>
                            <p className='text-gray-500'>
                                Dropbox ---- Warzawa
                            </p>
                        </div>

                        {/* Time */}
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2  '>
                                8.8 - 13.7k PLN
                            </h3>
                            <p className='text-gray-500'>2 days ago</p>
                        </div>
                    </a>

                    {/* CARD 2*/}
                    <a
                        href='#'
                        className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full   shadow-lg hover:border-purple-300 transition-all border-2 border-transparent mb-4 '>
                        {/* ICONO */}
                        <div className='  w-full  md:w-[7%] flex items-center  justify-start md:justify-center lg:justify-start '>
                            <RiTwitchLine className='text-7xl rounded-md bg-purple-100 text-purple-600 p-3' />
                        </div>

                        {/* Title card */}
                        <div className=' w-full md:w-[73%] '>
                            <h1 className='text-xl flex items-center gap-4 mb-2'>
                                Product Designer
                                <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>
                                    Remote
                                </span>
                                {/* <span className='text-xs py-1 px-2 bg-green-100 text-green-600 font-bold'>
                                    Sketch
                                </span> */}
                            </h1>
                            <p className='text-gray-500'>Twitch ---- Wroclaw</p>
                        </div>

                        {/* Time */}
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2  '>
                                8.8 - 13.5k PLN
                            </h3>
                            <p className='text-gray-500'>2 days ago</p>
                        </div>
                    </a>

                    {/* CARD 3*/}
                    <a
                        href='#'
                        className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full   shadow-lg hover:border-purple-300 transition-all border-2 border-transparent mb-4 '>
                        {/* ICONO */}
                        <div className='  w-full  md:w-[7%] flex items-center  justify-start md:justify-center lg:justify-start '>
                            <RiGoogleLine className='text-7xl rounded-md bg-purple-100 text-purple-600 p-3' />
                        </div>

                        {/* Title card */}
                        <div className=' w-full md:w-[73%] '>
                            <h1 className='text-xl flex items-center gap-4 mb-2'>
                                UX/UI Designer
                                <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>
                                    Remote
                                </span>
                                <span className='text-xs py-1 px-2 bg-yellow-100 text-yellow-600 font-bold'>
                                    Javascript
                                </span>
                            </h1>
                            <p className='text-gray-500'>Google ---- Wroclaw</p>
                        </div>

                        {/* Time */}
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2  '>
                                8.8 - 13.5k PLN
                            </h3>
                            <p className='text-gray-500'>2 days ago</p>
                        </div>
                    </a>

                    {/* CARD 4*/}
                    <a
                        href='#'
                        className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full   shadow-lg hover:border-purple-300 transition-all border-2 border-transparent mb-4 '>
                        {/* ICONO */}
                        <div className='  w-full  md:w-[7%] flex items-center  justify-start md:justify-center lg:justify-start '>
                            <RiAmazonLine className='text-7xl rounded-md bg-purple-100 text-purple-600 p-3' />
                        </div>

                        {/* Title card */}
                        <div className=' w-full md:w-[73%] '>
                            <h1 className='text-xl flex items-center gap-4 mb-2'>
                                Amazon Designer
                                <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>
                                    Remote
                                </span>
                                <span className='text-xs py-1 px-2 bg-red-100 text-red-600 font-bold'>
                                    Adobe
                                </span>
                            </h1>
                            <p className='text-gray-500'>Amazon ---- Wroclaw</p>
                        </div>

                        {/* Time */}
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2  '>
                                8.8 - 13.5k PLN
                            </h3>
                            <p className='text-gray-500'>2 days ago</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
