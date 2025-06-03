import React from 'react';

const Page = () => {
    return (
        <>
            <div className={'px-[20px] lg:px-[70px] xl:px-[100px] mx-auto py-[50px]'}>
            <span className={'font-bold italic'}>Nice to meet you!</span><br/>
            <span className={'font-bold text-[48px]'}>Welcome to...</span>
            <div className={'flex flex-col lg:flex-row gap-4 items-center'}>
                <div className={'w-full lg:w-1/2 text-center'}>
                    <img src="/pictures/Img2.svg" alt="" className={'mx-auto'}/>
                    <span className={'text-[36px] md:text-[48px] font-bold bg-gradient-to-r from-[#FFB147] to-[#B86ADF] bg-clip-text text-transparent'}>AMEN LOKONON</span><br/>
                    <span className={'text-[20px] md:[26px] lg:text-[32px]/[32px]'}><span className={'font-bold'}>Web developer</span> based in <span className={'font-bold'}>Benin</span></span><br/>
                    <button className={'bg-transparent underline flex gap-2 font-medium mx-auto mt-[20px]'}>Download CV<img src="/pictures/north_east.svg" alt="" className={'size-[24px]'}/></button>
                </div>
                <div className={'w-full lg:w-1/2'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'}>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[32px] rounded-full bg-gray-100 items-center flex justify-center'}>
                                <img src="/logos/Icon.svg" alt=""/>
                            </div>
                            <span className={'font-bold'}>+229 0190183398</span>
                        </div>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[32px] rounded-full bg-gray-100 items-center flex justify-center'}>
                                <img src="/logos/Icon.svg" alt=""/>
                            </div>
                            <span className={'font-bold'}>22 yrs</span>
                        </div>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'size-[32px] rounded-full bg-gray-100 items-center flex justify-center'}>
                                <img src="/logos/Icon.svg" alt=""/>
                            </div>
                            <span className={'font-bold'}>charleslokonon@gmail.com</span>
                        </div>
                    </div>
                    <hr className={'my-[40px]'}/>
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                        <div>
                            <div className={'flex gap-2 items-center'}>
                                <span className={'text-[48px] font-bold bg-gradient-to-r from-[#FFB147] to-[#B86ADF] bg-clip-text text-transparent'}>03+</span>
                                <span className={'text-[18px]/[20px] font-bold'}>Years <br/> experience...</span>
                            </div>
                            <span>
                                Hello there! My name is Jacob Jones.
                                I am a web designer & developer, and I'm very passionate and dedicated to my work.
                            </span>
                        </div>
                        <div>
                            <div className={'flex gap-2 items-center'}>
                                <span className={'text-[48px] font-bold bg-gradient-to-r from-[#FFB147] to-[#B86ADF] bg-clip-text text-transparent'}>03+</span>
                                <span className={'text-[18px]/[20px] font-bold'}>Years <br/> experience...</span>
                            </div>
                            <span>
                                Hello there! My name is Jacob Jones.
                                I am a web designer & developer, and I'm very passionate and dedicated to my work.
                            </span>
                        </div>
                    </div>
                    <div className={'w-full bg-[#141313] text-white py-[20px] mt-[70px]'}>
                        <div className={'flex items-center mx-auto w-fit'}>
                            <img src="/logos/ri_double-quotes-r.svg" alt=""/>
                            <span className={'text-[15px] font-semibold'}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin.”</span>
                        </div>
                    </div>
                </div>
            </div>
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