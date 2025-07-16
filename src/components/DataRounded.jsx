import React from 'react'
import { FaRegStopCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function DataRounded({data}) {

  return (
    <div className={`group w-[100%] h-[22vh] p-6 text-[#f4f4f4] bg-[#3C3C3C] rounded-3xl flex flex-col justify-between hover:text-[#3C3C3C] ${data.hover}`}>
        <div className='flex items-center justify-between'>
            <div className='bg-[#f4f4f4] text-sm px-2 text-[#3C3C3C] rounded-full group-hover:bg-[transparent] tracking-wide'>
                {data.startedYear} - {data.finishedYear}
            </div>
            <div className='w-[2vw] h-[2vw] bg-white rounded-full flex items-center justify-center text-[#3C3C3C]'>{data.working===false?<FaCheck />:<FaRegStopCircle />}</div>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-2xl font-semibold tracking-wide'>{data.role}</h3>
            <h2 className='font-normal tracking-wide'>{data.company}</h2>
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