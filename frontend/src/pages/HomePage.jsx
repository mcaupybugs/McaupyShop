import React from 'react';
import Navbar from '../components/Navbar';
import FilterBox from '../components/FilterBox';
import Project from '../components/Project';

const HomePage = () => {
    return (
        <div className='h-full w-full flex flex-col'>
            <div className='sticky top-0 z-50 bg-white'>
                <Navbar></Navbar>
            </div>
            {/* rest of the page, after the navbar vertically */}
            <div className='h-full w-full flex flex-col'>
                {/* horizontal diving the page into three sections to ensure margins on both ends */}
                <div className='h-42 w-full flex flex-row border-b'>
                    <div className='h-full w-full flex-3/14'>

                    </div>
                    <div className='h-full w-full flex flex-col flex-9/14'>
                        <div className='h-full w-full text-2xl pt-4 font-light overflow-auto'>
                            I am Vishal, coding tag McaupyBugs, I love to develop stuff which I post here, available to be used. Basically it is a portal to my world, and my day to day coding shenanigans.
                        </div>
                    </div>
                    <div className='h-full w-full flex-2/14'>

                    </div>
                </div>
                <div className='h-full w-full flex flex-row'>
                    <div className='h-full w-full flex-3/14'>

                    </div>
                    <div className='h-full w-full flex flex-col flex-9/14'>
                        <div className='h-full w-full text-3xl pt-4 font-small'>
                            Catalog
                        </div>
                    </div>
                    <div className='h-full w-full flex-2/14'>

                    </div>
                </div>
                <div className='h-full w-full flex flex-row '>
                    <div className='h-full w-full flex-3/14'>

                    </div>
                    <div className='h-full w-full flex flex-col flex-9/14'>
                        <div className='h-full w-full flex flex-row pt-4 gap-8'>
                            <FilterBox></FilterBox>
                            <Project></Project>
                        </div>
                    </div>
                    <div className='h-full w-full flex-2/14'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;