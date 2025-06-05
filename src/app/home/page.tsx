import React from 'react';
import Head from "next/head";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import ProjectCard from "@/components/customs/projectCard";

const Page = () => {
    return (
        <>
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

            <div className={''}>
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

                <>
                    <Head>
                        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
                    </Head>
                    <div className={'px-[20px] lg:px-[70px] xl:px-[100px] mx-auto py-[50px]'}>
                        <span className={'font-bold italic'}>Services</span><br/>
                        <span className={'font-bold text-[48px]/[56px]'}>MY SPECIALITIES</span>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1" className={'my-[40px]'}>
                                    <AccordionTrigger>
                                        <div className={'w-full flex gap-4 items-center text-[32px]/[48px]'}>
                                            <span>.</span>
                                            <span className={'text-[32px]/[48px]'}>SHOPIFY</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={'w-full flex flex-col md:flex-row gap-4 items-center'}>
                                            <div className={'w-full md:w-1/2'}>
                                                <img src="/pictures/Img3.svg" alt="" className={'w-[430px] h-[180px]'}/>
                                            </div>
                                            <div className={'w-full md:w-1/2'}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto consectetur dolorem eveniet, fuga iusto minus molestiae obcaecati officiis pariatur porro repudiandae soluta ut vero voluptates! Corporis dolorum eius est?
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className={'my-[40px]'}>
                                    <AccordionTrigger>
                                        <div className={'w-full flex gap-4 items-center text-[32px]/[48px]'}>
                                            <span>.</span>
                                            <span className={'text-[32px]/[48px]'}>SHOPIFY</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={'w-full flex flex-col md:flex-row gap-4 items-center'}>
                                            <div className={'w-full md:w-1/2'}>
                                                <img src="/pictures/Img3.svg" alt="" className={'w-[430px] h-[180px]'}/>
                                            </div>
                                            <div className={'w-full md:w-1/2'}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto consectetur dolorem eveniet, fuga iusto minus molestiae obcaecati officiis pariatur porro repudiandae soluta ut vero voluptates! Corporis dolorum eius est?
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className={'my-[40px]'}>
                                    <AccordionTrigger>
                                        <div className={'w-full flex gap-4 items-center text-[32px]/[48px]'}>
                                            <span>.</span>
                                            <span className={'text-[32px]/[48px]'}>SHOPIFY</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={'w-full flex flex-col md:flex-row gap-4 items-center'}>
                                            <div className={'w-full md:w-1/2'}>
                                                <img src="/pictures/Img3.svg" alt="" className={'w-[430px] h-[180px]'}/>
                                            </div>
                                            <div className={'w-full md:w-1/2'}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto consectetur dolorem eveniet, fuga iusto minus molestiae obcaecati officiis pariatur porro repudiandae soluta ut vero voluptates! Corporis dolorum eius est?
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className={'flex flex-col lg:flex-row gap-4 text-white px-[20px] lg:px-[70px] xl:px-[100px] py-[100px] lg:mr-[70px] xl:mr-[100px] bg-gradient-to-r from-[#FFB147] to-[#B86ADF]'}>
                        <div className={'w-full lg:w-1/2 flex flex-col gap-4'}>
                            <span className={'italic font-semibold'}>What can I use?</span>
                            <span className={'font-bold text-[36px]/[42px] lg:text-[48px]/[56px]'}>MY STACK</span>
                            <span className={'w-full lg:w-2/3'}>
                            Hello there! My name is Jacob Jones.I am a web designer & developer, and I'm very passionate and dedicated to my work.
                        </span>
                        </div>
                        <div className={'w-full lg:w-1/2 flex flex-col gap-4'}>

                            <div className={'w-full'}>
                                <span className={'font-bold italic'}>Languages</span>

                                <div className="w-full flex flex-wrap  gap-4 my-[20px]">
                                    {/* Icônes avec Tailwind inline */}
                                    <i className="devicon-html5-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-css3-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-javascript-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-typescript-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-php-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-nodejs-plain-wordmark text-white text-5xl hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <hr/>
                            <div className={'w-full'}>
                                <span className={'font-bold italic'}>Frameworks</span>

                                <div className="w-full flex flex-wrap  gap-4 my-[20px]">
                                    {/* Icônes avec Tailwind inline */}
                                    <i className="devicon-react-original text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-nextjs-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-tailwindcss-original text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-bootstrap-plain text-white text-5xl hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <hr/>
                            <div className={'w-full'}>
                                <span className={'font-bold italic'}>Database</span>

                                <div className="w-full flex flex-wrap  gap-4 my-[20px]">
                                    {/* Icônes avec Tailwind inline */}
                                    <i className="devicon-mysql-original text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-postgresql-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-supabase-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-mongodb-plain text-white text-5xl hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <hr/>
                            <div className={'w-full'}>
                                <span className={'font-bold italic'}>Others</span>

                                <div className="w-full flex flex-wrap  gap-4 my-[20px]">
                                    {/* Icônes avec Tailwind inline */}
                                    <i className="devicon-git-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-gitlab-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-docker-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-postman-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-figma-plain text-white text-5xl hover:scale-110 transition-transform" />
                                    <i className="devicon-notion-plain text-white text-5xl hover:scale-110 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>

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
            </div>
        </>
    );
};

export default Page;