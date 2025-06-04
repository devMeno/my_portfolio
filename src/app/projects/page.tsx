import React from 'react';
import ProjectCard from "@/components/customs/projectCard";

const Page = () => {
    return (
        <>
            <div className={'px-[20px] lg:px-[70px] xl:px-[100px] mx-auto py-[50px]'}>
                <span className={'font-bold italic'}>Works</span><br/>
                <span className={'font-bold text-[48px]/[56px]'}>RECENTS PROJECTS</span>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 pt-[50px]'}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
                <button className={'mx-auto flex gap-2 items-center my-[20px] lg:my-[50px] bg-[#141313] text-white font-medium text-[14px] lg:text-[18px] h-[32px] lg:h-[56px] px-[30px]'}>View more
                    <img src="/pictures/north_east.svg" alt="" className={'size-[24px]'}/>
                </button>
            </div>
            <div className={'flex flex-col lg:flex-row gap-4 text-white px-[20px] lg:px-[70px] xl:px-[100px] py-[100px] lg:mr-[70px] xl:mr-[100px] bg-gradient-to-r from-[#FFB147] to-[#B86ADF]'}>
                <div className={'w-full lg:w-1/2 flex flex-col gap-4'}>
                    <span className={'italic font-semibold'}>Experience</span>
                    <span className={'font-bold text-[36px]/[42px] lg:text-[48px]/[56px]'}>MY EXPERIENCE</span>
                    <span className={'w-full lg:w-2/3'}>
                        Hello there! My name is Jacob Jones.I am a web designer & developer, and I'm very passionate and dedicated to my work.
                    </span>
                </div>
                <div className={'w-full lg:w-1/2 flex flex-col gap-4'}>
                    <div className={'w-full'}>
                        <div className={'flex justify-between'}>
                            <span className={'font-bold italic'}>-2018-Present</span>
                            <span>RightCom</span>
                        </div>
                        <div className={'text-[28px]/[32px] lg:text-[32px]/[48px] font-bold my-[20px]'}>FRONTEND DEVELOPER</div>
                    </div>
                    <hr/>
                    <div className={'w-full'}>
                        <div className={'flex justify-between'}>
                            <span className={'font-bold italic'}>-2018-Present</span>
                            <span>RightCom</span>
                        </div>
                        <div className={'text-[28px]/[32px] lg:text-[32px]/[48px] font-bold my-[20px]'}>FRONTEND DEVELOPER</div>
                    </div>
                    <hr/>
                    <div className={'w-full'}>
                        <div className={'flex justify-between'}>
                            <span className={'font-bold italic'}>-2018-Present</span>
                            <span>RightCom</span>
                        </div>
                        <div className={'text-[28px]/[32px] lg:text-[32px]/[48px] font-bold my-[20px]'}>FRONTEND DEVELOPER</div>
                    </div>
                    <hr/>
                    <div className={'w-full'}>
                        <div className={'flex justify-between'}>
                            <span className={'font-bold italic'}>-2018-Present</span>
                            <span>RightCom</span>
                        </div>
                        <div className={'text-[28px]/[32px] lg:text-[32px]/[48px] font-bold my-[20px]'}>FRONTEND DEVELOPER</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;