import React, { useState } from 'react'
import ProjectsCard from './ProjectsCard'

function Projects() {
    const[project, setProject]= useState([
        {title:"", category:"", tech:"Java", col_span:"2"},
        {title:"", category:"", tech:"VBA", col_span:"1"},
        {title:"", category:"", tech:"VBS", col_span:"2"},
        {title:"", category:"", tech:"VBS", col_span:"1"},
    ])
    return (
        <div className='p-[3%] w-[100%] h-[100vh] font-[clash_display] bg-red-500'>
            <h1 className='text-[2.5vw] font-semibold'>Projects</h1>
            <div className=' mt-5 bg-yellow-400 w-full h-full grid grid-cols-[15vw_15vw_25vw_15vw_15vw_1fr] grid-rows-[15vw_15vw_15vw_15vw] gap-2'>
                {project.map((item, index)=><ProjectsCard key={index} data={item} />)}
            </div>
        </div>
    )
}

export default Projects