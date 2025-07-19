import React from 'react'

function ProjectsCard({data}) {
  return (
    <div className={`p-5 border-[2px] rounded-3xl col-span-${data.col_span}`}>
        {data.tech}
    </div>
  )
}

export default ProjectsCard