import React from 'react';

const Page = () => {
    return (
        <div className={'px-[20px] lg:px-[70px] xl:px-[100px] mx-auto py-[50px]'}>
            <div className={'flex flex-col lg:flex-row-reverse gap-4'}>

                <div className={'w-full lg:w-3/5 text-white px-[20px] lg:px-[50px] py-[50px] bg-gradient-to-r from-[#FFB147] to-[#B86ADF]'}>
                    <span className={'text-[40px] font-bold'}>ANY PROJECT?</span>
                    <form className={'flex flex-col mt-[20px] gap-2'}>
                        <div className={'flex gap-4'}>
                            <input type="text" placeholder={'Name'} className={'w-full border-0 border-b-1 border-white focus:outline-none px-0 py-3 bg-transparent transition-colors duration-300'}/>
                            <input type="email" placeholder={'Email'} className={'w-full border-0 border-b-1 border-white focus:outline-none px-0 py-3 bg-transparent transition-colors duration-300'}/>
                        </div>
                        <textarea
                            placeholder="Votre message"
                            className={'w-full border-0 border-b-1 border-white focus:outline-none px-0 py-3 bg-transparent transition-colors duration-300'}
                            rows={4}
                        />
                        <div className="relative">
                            {/* Input caché */}
                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                accept="image/*"
                            />

                            {/* Label personnalisé qui sert de "placeholder" */}
                            <div className={'flex gap-2'}>
                                <img src="/logos/link.svg" alt=""/>
                                <label
                                    htmlFor="file-upload"
                                    className="border-none focus-within:border-blue-50 px-0 py-2 bg-transparent text-white cursor-pointer inline-block"
                                >
                                    Attach a file
                                </label>
                            </div>
                        </div>
                        <button className={'w-fit flex gap-2 items-center bg-[#141313] text-white font-medium text-[14px] h-[32px] px-[30px]'}>
                            Submit
                        </button>
                    </form>
                </div>

                <div className={'w-full lg:w-2/5 flex flex-col gap-4 justify-between'}>
                    <span className={'font-bold italic'}>Contact</span>
                    <span className={'font-bold text-[36px]/[42px] lg:text-[48px]/[56px]'}>Reach out me</span>
                    <span>Cotonou, Benin</span>
                    <span className={'font-bold text-[20px]/[22px] lg:text-[32px]/[40px]'}>+229 01 90 18 33 98</span>
                    <span className={'font-bold text-[20px]/[22px]'}>charlesamenlokonon@gmail.com</span>
                    <div className={'flex gap-4 font-medium text-[16px]'}>
                        <span>LINKEDIN</span>
                        <span>INSTAGRAM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;