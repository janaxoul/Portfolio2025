import React, { useState } from 'react'
import DataRounded from './DataRounded'

function Experience() {
    const[expe, setExp]=useState([
        {
            company:"Capgemini", role:"Software Engineer",startedMonth: "07", startedYear:"2024", duration:"4 months", finishedMonth:"06", finishedYear:"Present", working:true, hover:"hover:bg-sky-500"
        },
        {
            company:"Freelancer", role:"Web Developer",startedMonth: "07", startedYear:"2025", duration:"4 months", finishedMonth:"06", finishedYear:"Present", working:true, hover:"hover:bg-blue-500"
        },
        {
            company:"Accenture", role:"Intern",startedMonth: "02", startedYear:"2024", duration:"4 months",finishedMonth:"06", finishedYear:"2024", working:false, hover:"hover:bg-purple-500"
        },
    ]);
return (
    <div className='w-[100%] h-[100vh] flex items-start flex-wrap justify-start'>
        <div className='p-[3%] w-1/3 h-full bg-blue-00'>
            <div className='flex flex-col font-[clash_display] items-start gap-4 '>
                <h1 className='text-[2.5vw] font-semibold font-[clash_display]'>Experience</h1>
                {expe.map((item, index)=><DataRounded key={index} data={item}/>)}
            </div>
        </div>
        <div className='p-[3%] w-1/3 h-full bg-red-00'>
            <div className='w-[100%] h-[100%] flex flex-col font-[clash_display] items-start gap-4 '>
                <h1 className='text-[2.5vw] font-semibold font-[clash_display]'>Abilities</h1>
                <div className='h-[40%] p-3 text-[2.5vw] font-medium bg-red-00 rounded-3xl w-[100%] border-[2px] hover:bg-[#3C3C3C] hover:text-[#f4f4f4]'>Full Stack Development, Graphic Design, 2D art</div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Experience