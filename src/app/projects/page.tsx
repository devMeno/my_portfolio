import React from 'react';
import ProjectCard from "@/components/customs/projectCard";

const Page = () => {
    return (
        <div className={'px-[20px] lg:px-[70px] xl:px-[100px] mx-auto py-[50px]'}>
            <span className={'font-bold italic'}>Works</span><br/>
            <span className={'font-bold text-[48px]/[56px]'}>RECENTS PROJECTS</span>
            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 pt-[50px]'}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
};

export default Page;