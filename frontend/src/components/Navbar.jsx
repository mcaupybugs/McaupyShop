import React from 'react';

const Navbar = () => {
    return (
        <div className='h-14 w-full border-b-2 flex flex-col'>
            <div className='h-full w-full flex flex-row'>
                <div className='h-full w-full flex flex-row gap-2'>
                    <div className='h-full w-full flex justify-end p-2 pr-8'>
                        <img src="assets/logo.jpg" alt="My display picture" className='border rounded-full' />
                    </div>
                    <div className='h-full w-full flex'>
                        <div className='h-full w-full flex flex-col justify-center font-Itim font-medium text-xl'>
                            McaupyBugs
                        </div>
                    </div>
                </div>
                <div className='h-full w-full flex flex-row gap-8'>
                    <div className='h-full w-full flex justify-end'>
                        <input placeholder="Enter email address ... " className='h-8 focus:outline-none flex self-center border rounded-sm p-4' />
                    </div>
                    <div className='h-full w-full flex'>
                        <div className='h-10 w-contain flex border self-center place-items-center p-2 rounded-sm font-medium text-lg'>
                            Subscribe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;