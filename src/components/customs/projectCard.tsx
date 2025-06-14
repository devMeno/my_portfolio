import React from 'react';

export interface ProjectCardProps {
    url: string;
    typeOfProject: string;
    title: string;
    link: string;
}

const ProjectCard : React.FC<ProjectCardProps> = (props) => {
    return (
        <div className={'w-full flex flex-col xl:flex-row-reverse gap-[10px] xl:gap-[30px] justify-between h-fit xl:h-[200px]'}>
            <div className={'relative w-full lg:w-[65%] h-[200px] overflow-hidden'}>
                <img src={props.url} alt="" className={'absolute inset-0 w-full h-full object-cover'}/>
            </div>
            <div className={'flex flex-row xl:flex-col justify-between w-full lg:w-[35%]'}>
                <div className={'flex flex-col'}>
                    <span className={'italic font-semibold'}>{props.typeOfProject}</span>
                    <span className={'text-[25px]/[25px] lg:text-[28px]/[28px] font-bold'}>{props.title}</span>
                </div>
                <a href={props.link}
                   target="_blank"
                   rel="noopener noreferrer"
                    className={'size-[40px] flex items-center cursor-pointer'}>
                    <img src="/logos/redirect.svg" alt="" className={'size-[38.5px] mx-auto'} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;