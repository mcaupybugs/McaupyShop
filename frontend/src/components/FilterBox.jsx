import React from 'react';

const FilterBox = () => {
    return (
        <div className='h-full w-full border flex flex-3/12 flex-col text-2xl font-light rounded-md'>
            <div className='h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2 border-b'>
                <div>1-4 of 4 projects</div>
                <div className='underline cursor-pointer'>Clear</div>
            </div>
            <div className='h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2 border-b'>
                <input className="outline rounded-md p-2" placeholder='Search'></input>
            </div>
            <div className='h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2 border-b'>

            </div>
            <div className='h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2 border-b'>

            </div>
            <div className='h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2'>

            </div>
        </div>
    )
}

export default FilterBox;