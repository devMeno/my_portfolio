import React from 'react';

const Page = () => {
    return (
        <div className={'w-full flex flex-row justify-between'}>
            <div className={'flex flex-col lg:flex-row-reverse lg:max-w-[1277px] lg:gap-[20px] px-[20px] lg:px-[70px] xl:px-[100px] mx-auto items-center'}>
                <div className={'w-full lg:w-1/2 lg:max-w-[660px] mb-[40px] lg:mb-0'}>
                    <img src="/pictures/Img.svg" alt="" className={'w-2/3 lg:w-full mx-auto'} />
                </div>
                <div className={'w-full lg:w-1/2 lg:max-w-[597px]'}>
                    <span className={'text-[40px]/[25px] md:text-[60px]/[35px] lg:text[80px]/[50px] xl:text-[102px]/[90px]'}>MY NAME IS <span className={'font-bold'}>AMEN LOKONON</span></span><br/>
                    <span className={'text-[20px] md:[26px] lg:text-[32px]/[32px]'}><span className={'font-bold'}>Web developer</span> based in Benin</span>
                    <button className={'flex gap-2 items-center my-[20px] lg:my-[50px] bg-[#141313] text-white font-medium text-[14px] lg:text-[18px] h-[40px] lg:h-[56px] px-[30px]'}>Let's talk with me
                        <img src="/pictures/north_east.svg" alt="" className={'size-[24px]'}/>
                    </button>
                    <div className={'flex flex-col gap-4'}>
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
                            <span className={'font-bold'}>charlesamenlokonon@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'w-[50px] h-screen'}></div>
        </div>
    );
};

export default Page;