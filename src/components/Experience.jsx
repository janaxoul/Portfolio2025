import React, { useState } from 'react'
import DataRounded from './DataRounded'

function Experience() {
    const[expe, setExp]=useState([
        {company:"Capgemini", role:"Software Engineer",startedMonth: "07", startedYear:"2024", duration:"4 months", finishedMonth:"06", finishedYear:"Present", working:true, hover:"hover:text-[#3C3C3C] hover:bg-sky-500",bg:" text-[#f4f4f4]", yearBg:"bg-[#f4f4f4] text-[#3C3C3C]"},
        {company:"Freelancer", role:"Web Developer",startedMonth: "07", startedYear:"2025", duration:"4 months", finishedMonth:"06", finishedYear:"Present", working:true, hover:"hover:text-[#3C3C3C] hover:bg-blue-500",bg:" text-[#f4f4f4]", yearBg:"bg-[#f4f4f4] text-[#3C3C3C]"},
        {company:"Accenture", role:"Intern",startedMonth: "02", startedYear:"2024", duration:"4 months",finishedMonth:"06", finishedYear:"2024", working:false, hover:"hover:text-[#3C3C3C] hover:bg-purple-500", bg:" text-[#f4f4f4]", yearBg:"bg-[#f4f4f4] text-[#3C3C3C]"},
    ]);
    const [edu, setEdu]=useState([
        {company:"Self Learning", role:"Computer Science",startedYear:"2024", finishedYear:"Present", working: true, hover:'hover:text-[#3C3C3C] hover:bg-yellow-400', bg:"bg-transparent text-[#3C3C3C] border-[2px]",yearBg:"bg-[#3C3C3C] text-[#f4f4f4] group-hover:text-[#3C3C3C]"},
        {company:"Self Learning", role:"Art",startedYear:"2024", finishedYear:"Present", working: true, hover:'hover:text-[#3C3C3C] hover:bg-yellow-400', bg:"bg-transparent text-[#3C3C3C] border-[2px]",yearBg:"bg-[#3C3C3C] text-[#f4f4f4] group-hover:text-[#3C3C3C]"},
        {company:"Chennai Institute of Technology", role:"Mechanical Engineering",startedYear:"2020", finishedYear:"2024", working:false, hover:'hover:text-[#3C3C3C] hover:bg-yellow-400', bg:"bg-transparent text-[#3C3C3C] border-[2px]", yearBg:"bg-[#3C3C3C] text-[#f4f4f4] group-hover:text-[#3C3C3C]"}
    ])
    const[abilities, setAbilities]=useState("Full Stack Development, Graphic Design, 2D art")
    return (
        <div className='w-full h-[100vh] flex items-start flex-wrap justify-start'>
            <div className='p-[3%] w-1/3 h-full bg-blue-00'>
                <div className='flex flex-col font-[clash_display] h-full items-start gap-4 '>
                    <h1 className='text-[2.5vw] font-semibold font-[clash_display]'>Experience</h1>
                    {expe.map((item, index)=><DataRounded key={index} length={expe.length} data={item}/>)}
                </div>
            </div>
            <div className='p-[3%] w-1/3 h-[100%] bg-red-00 flex flex-col justify-between bg-red-00'>
                    <h1 className='text-[2.5vw] font-semibold font-[clash_display]'>Abilities</h1>
                <div className='w-[100%] h-[50%] flex flex-wrap font-[clash_display] bg-blue-00 '>
                    <div className='h-full mt-3 p-3 text-[2.5vw] font-medium bg-red-00 rounded-3xl w-[100%] border-[2px] transition-all duration-200 hover:'>
                        {abilities}
                    </div>
                </div>
                <div className='w-[100%] h-[50%] bg-red-00 mt-5'>
                    <h1 className='text-[2.5vw] font-semibold font-[clash_display] mt-4'>Interests</h1>
                    <div className='mt-3 w-full h-[80%] gap-2 flex justify-between'>
                        <div className='w-[50%] h-[100%]'>
                            <div className='h-[95%] min-w-1/2 p-3 text-[2.5vw] font-medium rounded-3xl border-[2px]'>
                            </div>
                        </div>
                        <div className='w-[50%] h-[100%] pb-[4%] gap-3 flex flex-col items-center justify-between'>
                            <div className='h-[50%] w-[100%] p-3 text-[2.5vw] font-medium bg-red-00 rounded-3xl  border-[2px]'></div>
                            <div className='mt-2 h-[50%] w-[100%] p-3 text-[2.5vw] font-medium bg-red-00 rounded-3xl  border-[2px]'></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='p-[3%] w-1/3 h-full bg-blue-00'>
                <div className='flex flex-col font-[clash_display] justify-start h-full items-start gap-4 bg-blue-00 '>
                    <h1 className='text-[2.5vw] font-semibold font-[clash_display]'>Education</h1>
                    {edu.map((item, index)=><DataRounded key={index} length={edu.length} data={item}/>)}
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Experience