import React from 'react';

const ProjectCard = () => {
    return (
        <div className={'w-full flex flex-col xl:flex-row-reverse gap-[10px] xl:gap-[30px] justify-between h-fit xl:h-[248px]'}>
            <div className={'relative w-full lg:w-3/5 h-[248px] overflow-hidden'}>
                <img src="/pictures/project.svg" alt="" className={'absolute inset-0 w-full h-full object-cover'}/>
            </div>
            <div className={'flex flex-row xl:flex-col justify-between w-full lg:w-2/5'}>
                <div className={'flex flex-col'}>
                    <span className={'italic font-semibold'}>UX case study</span>
                    <span className={'text-[25px]/[25px] lg:text-[32px]/[32px] font-bold'}>PET COMMERCE PLATEFORM</span>
                </div>
                <button className={'size-[64px] flex items-center'}>
                    <img src="/logos/redirect.svg" alt="" className={'size-[38.5px] mx-auto'} />
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;