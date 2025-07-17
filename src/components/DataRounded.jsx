import React from 'react'
import { FaRegStopCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function DataRounded({length,data}) {
    console.log((1/length)*100)
  return (
    <div className={`group w-[100%] h-[30%] px-6 py-4 bg-[#3C3C3C] ${data.bg} rounded-3xl flex flex-col justify-evenly ${data.hover}`}>
        <div className='flex items-center justify-between'>
            <div className= {`${data.yearBg} text-sm px-2 rounded-full group-hover:bg-[transparent] tracking-wide`}>
                {data.startedYear} - {data.finishedYear}
            </div>
            <div className='w-[2vw] h-[2vw] bg-white rounded-full flex items-center justify-center text-[#3C3C3C] transition-transform duration-200 group-hover:scale-[120%]'>{data.working===false?<FaCheck />:<FaRegStopCircle />}</div>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-2xl font-semibold tracking-wide'>{data.role}</h3>
            <h2 className='font-normal opacity-[60%] group-hover:opacity-[100%] tracking-wide'>{data.company}</h2>
        </div>
        {/* <div className='flex justify-between'>
            <div className='date w-[20%]'>
                {data.startedMonth}/{data.startedYear}
            </div>
            <div className='date w-[20%] tracking-wide'>
                {data.working?"Present":`${data.finishedMonth}/${data.finishedYear}`}
            </div>
        </div> */}
    </div>
  )
}

export default DataRounded