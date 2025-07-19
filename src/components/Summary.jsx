import { useState } from "react";
import RoundedText from "./RoundedText";



function Summary() {
    const [techSkills, setTechSkills]=useState([
        {name:"Java",logo:"",hover:"hover:bg-[orange]"},
        {name:"Java Script",logo:"",hover:"hover:bg-[yellow]"},
        {name:"React",logo:"",hover:"hover:bg-[#27a3ff]"},
        {name:"Spring Boot",logo:"",hover:"hover:bg-[#14ff01]"},
        {name:"SQL",logo:"",hover:"hover:bg-[white]"},
        {name:"MongoDB",logo:"",hover:"hover:bg-[#00ff5d]"},
        {name:"Git",logo:"",hover:"hover:bg-[#dfdfdf]"},
        {name:"Docker",logo:"",hover:"hover:bg-[#27a3ff]"},
        {name:"VBA",logo:"",hover:"hover:bg-[white]"}
    ]);

    const [designskills, setDesignSkills]=useState([
        { name: "Adobe Photoshop",logo:"",hover:"hover:bg-[#27a3ff]"  },
        { name: "Adobe Premier Pro",logo:"",hover:"hover:bg-[#0074c9]"  },
        { name: "Davinci Resolve",logo:"",hover:"hover:bg-[white]"}
    ]);
    const [art, setArt]=useState([
        { name: "Drawing",logo:"",hover:"hover:bg-[#27a3ff]"  },
        { name: "Photography",logo:"",hover:"hover:bg-[#0074c9]"  },
        { name: "Graphic Design",logo:"",hover:"hover:bg-[#0074d9]"},
        { name: "Video Editing",logo:"",hover:"hover:bg-[#0074e9]"},  
        { name: "Cinematography ",logo:"",hover:"hover:bg-[#0074e9]"},  
    ]);

    return (
        <div className="flex flex-wrap">
            <div className=' relative p-[3%] h-[50vh] text-[clash_display] w-[100%] flex items-start justify-start gap-10'>
                <div className='w-[35%] h-[100%] bg-blue-00'>
                    <div className=" group relative w-[100%] h-[100%] bg-[#3C3C3C] duration:300 ease-in-out hover:bg-[url('./assets/1000063610.png')] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden">
                        <h4 className="absolute text-[3vw] p-5 font-[clash_display] text-[#f4f4f4] group-hover:mix-blend-exclusion">Hello,</h4>
                        <div className="absolute bottom-0 w-[100%] p-5">
                        <h1 className="text-[#f4f4f4] font-[clash_display] text-end text-[2.5vw] leading-none whitespace-normal tracking-wide group-hover:mix-blend-exclusion overflow-hidden">My name is </h1>
                        <h1 className="text-[#f4f4f4] font-[clash_display] text-end text-[4vw] leading-none whitespace-normal tracking-wide group-hover:mix-blend-exclusion overflow-hidden">Janarthanan</h1>
                        </div>
                        
                    </div>
                </div>
                <div className='w-[65%] bg-red-0 h-[100%] px-2 flex flex-col justify-start'>
                    <h2 className="text-[3vw] font-semibold font-[clash_display]">Introduction</h2>
                    <div className="border-[2px] p-[15px] rounded-3xl flex flex-col gap-3">
                        <h3 className="text-[2.6vw] font-[clash_display] font-[600] tracking-wide"> Engineer based in Bangalore</h3>
                        <p className="font-[clash_display] text-[1.5vw] tracking-wide">Backend developer with hands-on experience in Spring Boot and API integration. Skilled in debugging, version control, and building scalable services. Currently expanding expertise in React and JavaScript.</p>
                    </div>
                </div>
            </div>
            <div className="relative h-fit text-[clash_display] w-[100%] flex flex-wrap items-center justify-between">
                <div className="px-[3%] py-[1%] w-[100%]">
                    <div className="px-[4%] py-[3%] text-2xl font-[clash_display] gap-2 flex flex-col tracking-wide border-[2px] rounded-3xl">
                        <h1 className="font-[600]">Tech-stack</h1>
                        <div className="flex flex-wrap gap-2">
                        {techSkills.map((item, index)=><RoundedText key={index} data={item}/>)}
                        </div>
                    </div>
                </div>
                <div className="px-[3%] py-[1%] w-1/3">
                    <div className=" px-[5%] py-[3%]  text-2xl font-[clash_display] gap-2 flex flex-col tracking-wide border-[2px] rounded-3xl">
                        <h1 className="font-[600]">Software</h1>
                        <div className="flex flex-wrap gap-2">
                        {designskills.map((item, index)=><RoundedText key={index} data={item}/>)}
                        </div>
                    </div>
                </div>
                <div className="px-[3%] py-[1%] w-2/3">
                    <div className=" px-[5%] py-[3%]  text-2xl font-[clash_display] gap-2 flex flex-col tracking-wide border-[2px] rounded-3xl">
                        <h1 className="font-[600]">Art</h1>
                        <div className="flex flex-wrap gap-2">
                        {art.map((item, index)=><RoundedText key={index} data={item}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary