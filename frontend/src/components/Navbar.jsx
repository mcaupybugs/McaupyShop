import React from 'react';

const Navbar = () => {
    return (
        <div className='h-14 w-full border-b-2 flex flex-col'>
            <div className='h-full w-full flex flex-row'>
                <div className='h-full w-full flex flex-row'>
                    <div className='h-full w-full flex justify-end p-2'>
                        <img src="assets/logo.jpg" alt="My display picture" className='border rounded-full' />
                    </div>
                    <div className='h-full w-full flex'>
                        <div className='h-full w-full flex flex-col justify-center font-Itim'>
                            McaupyBugs
                        </div>
                    </div>
                </div>
                <div className='h-full w-full flex flex-row'>
                    <div className='h-full w-full flex justify-end'>
                        <input placeholder="Enter email address ... " className='h-8 focus:outline-none flex self-center border p-2' />
                    </div>
                    <div className='h-full w-full flex'>
                        <div className='h-10 w-contain flex border'>
                            Subscribe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;