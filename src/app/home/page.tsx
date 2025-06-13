import React from 'react';
import Head from "next/head";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import ProjectCard from "@/components/customs/projectCard";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const Page = () => {
    return (
        <>
        <div className={'w-full flex flex-row justify-between'}>
            <div className={'flex flex-col lg:flex-row-reverse lg:max-w-[1277px] lg:gap-[20px] px-[20px] lg:px-[70px] xl:px-[100px] mx-auto items-center'}>
                <div className={'w-full lg:w-1/2 lg:max-w-[660px] mb-[40px] lg:mb-0'}>
                    <img src="/pictures/Img.svg" alt="" className={'w-full mx-auto'} />
                </div>
                <div className={'w-full lg:w-1/2 lg:max-w-[597px]'}>
                    <span className={'text-[40px]/[50px] md:text-[60px]/[75px] lg:text[80px]/[50px] xl:text-[102px]/[90px]'}>MY NAME IS <span className={'font-bold'}>AMEN LOKONON</span></span><br/>
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
                    <div className={'px-[20px] lg:px-[70px] xl:px-[100px] mx-auto py-[25px] lg:py-[50px]'}>
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
                                            <span className={'text-[48px] font-bold bg-gradient-to-r from-[#FFB147] to-[#B86ADF] bg-clip-text text-transparent'}>01+</span>
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
                    <div className={'flex flex-col lg:flex-row gap-4 text-white px-[20px] lg:px-[70px] xl:px-[100px] py-[30px] lg:py-[100px] lg:mr-[70px] xl:mr-[100px] bg-gradient-to-r from-[#FFB147] to-[#B86ADF]'}>
                        <div className={'w-full lg:w-1/2 flex flex-col gap-4'}>
                            <span className={'italic font-semibold'}>Experience</span>
                            <span className={'font-bold text-[36px]/[42px] lg:text-[48px]/[56px]'}>MY EXPERIENCE</span>
                            <span className={'w-full lg:w-2/3'}>
                                I gained significant experience in front-end development by helping to design and improve intuitive, high-performance web interfaces. These experiences have enabled me to strengthen my rigour, deepen my understanding of user needs and work effectively with multi-disciplinary teams. I've also learnt to adapt quickly to project requirements while respecting deadlines and good development practices.
                    </span>
                        </div>
                        <div className={'w-full lg:w-1/2 flex flex-col gap-4'}>
                            <div className={'w-full'}>
                                <div className={'flex justify-between'}>
                                    <span className={'font-bold italic'}>Jan 2025 - Mar 2025</span>
                                    <span>Intside</span>
                                </div>
                                <div className={'text-[28px]/[32px] lg:text-[32px]/[48px] font-bold my-[20px]'}>FRONTEND DEVELOPER</div>
                            </div>
                            <hr/>
                            <div className={'w-full'}>
                                <div className={'flex justify-between'}>
                                    <span className={'font-bold italic'}>Jan 2024 - Jul 2024</span>
                                    <span>RightCom</span>
                                </div>
                                <div className={'text-[28px]/[32px] lg:text-[32px]/[48px] font-bold my-[20px]'}>FRONTEND DEVELOPER (Intern)</div>
                            </div>
                            <hr/>
                            <div className={'w-full'}>
                                <div className={'flex justify-between'}>
                                    <span className={'font-bold italic'}>Aug 2023</span>
                                    <span>RightCom</span>
                                </div>
                                <div className={'text-[28px]/[32px] lg:text-[32px]/[48px] font-bold my-[20px]'}>FRONTEND DEVELOPER (Intern)</div>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    <Head>
                        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
                    </Head>
                    <div className={'px-[20px] lg:px-[70px] xl:px-[100px] mx-auto py-[30px] lg:py-[50px]'}>
                        <span className={'font-bold italic'}>Services</span><br/>
                        <span className={'font-bold text-[36px]/[42px] lg:text-[48px]/[56px]'}>MY SPECIALITIES</span>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1" className={'my-[15px] lg:my-[40px]'}>
                                    <AccordionTrigger>
                                        <div className={'w-full flex gap-4 items-center text-[20px] lg:text-[32px]/[48px]'}>
                                            <span>.</span>
                                            <span>Development of custom websites & applications</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={'w-full flex flex-col md:flex-row gap-4 items-center'}>
                                            <div className={'w-full md:w-1/2'}>
                                                <img src="/pictures/web-dev.jpg" alt="" className={'w-[430px] h-[180px]'}/>
                                            </div>
                                            <div className={'w-full md:w-1/2'}>
                                                I design websites and custom applications tailored to the specific needs of each project, whether it's a showcase site, a blog, a SaaS platform, a customer area or a business tool. Each project is designed to offer a fluid, intuitive and responsive experience, with particular attention paid to performance, design and accessibility.
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className={'my-[15px] lg:my-[40px]'}>
                                    <AccordionTrigger>
                                        <div className={'w-full flex gap-4 items-center text-[20px] lg:text-[32px]/[48px]'}>
                                            <span>.</span>
                                            <span>Frontend & modern UI integration</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={'w-full flex flex-col md:flex-row gap-4 items-center'}>
                                            <div className={'w-full md:w-1/2'}>
                                                <img src="/pictures/frontend-pic.jpg" alt="" className={'w-[430px] h-[180px]'}/>
                                            </div>
                                            <div className={'w-full md:w-1/2'}>
                                                Based on mock-ups or a visual brief, I transform ideas into concrete, responsive web interfaces compatible with all media (desktop, tablet, mobile). I ensure pixel-perfect integration that complies with web standards, while optimising usability, navigation and accessibility (semantic HTML, ARIA, etc.).
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className={'my-[15px] lg:my-[40px]'}>
                                    <AccordionTrigger>
                                        <div className={'w-full flex gap-4 items-center text-[20px] lg:text-[32px]/[48px]'}>
                                            <span>.</span>
                                            <span>Backend development & business logic</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={'w-full flex flex-col md:flex-row gap-4 items-center'}>
                                            <div className={'w-full md:w-1/2'}>
                                                <img src="/pictures/backend-pic.jpg" alt="" className={'w-[430px] h-[180px]'}/>
                                            </div>
                                            <div className={'w-full md:w-1/2'}>
                                                I set up the technical structure on the server side: creation of REST or GraphQL APIs, database management, form processing, authentication/authorisation (auth, JWT, OAuth), file storage, user management, etc. I ensure the security, reliability and scalability of the functionalities.                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4" className={'my-[15px] lg:my-[40px]'}>
                                    <AccordionTrigger>
                                        <div className={'w-full flex gap-4 items-center text-[20px] lg:text-[32px]/[48px]'}>
                                            <span>.</span>
                                            <span>Deployment, hosting & online availability</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={'w-full flex flex-col md:flex-row gap-4 items-center'}>
                                            <div className={'w-full md:w-1/2'}>
                                                <img src="/pictures/web-pic.jpg" alt="" className={'w-[430px] h-[180px]'}/>
                                            </div>
                                            <div className={'w-full md:w-1/2'}>
                                                I'm in charge of deploying projects on modern services (such as Vercel, Render, Railway, or VPS with Docker) with domain name management, setting up HTTPS (SSL), optimising performance, and configuring production and development environments.                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5" className={'my-[15px] lg:my-[40px]'}>
                                    <AccordionTrigger>
                                        <div className={'w-full flex gap-4 items-center text-[20px] lg:text-[32px]/[48px]'}>
                                            <span>.</span>
                                            <span>Creating online shops with Shopify</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={'w-full flex flex-col md:flex-row gap-4 items-center'}>
                                            <div className={'w-full md:w-1/2'}>
                                                <img src="/pictures/shopify-pic.jpg" alt="" className={'w-[430px] h-[180px]'}/>
                                            </div>
                                            <div className={'w-full md:w-1/2'}>
                                                I create high-performance, aesthetically pleasing online shops using Shopify, customising both free and paid themes. Thanks to an advanced command of the platform, I'm able to design fully branded shops, aligned with the brand's visual identity, while ensuring a fluid, conversion-optimised user experience. From product configuration to the integration of useful apps, every detail is thought through to deliver a turnkey shop that's ready to sell.
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className={'flex flex-col lg:flex-row gap-4 text-white px-[20px] lg:px-[70px] xl:px-[100px] py-[30px] lg:py-[100px] lg:mr-[70px] xl:mr-[100px] bg-gradient-to-r from-[#FFB147] to-[#B86ADF]'}>
                        <div className={'w-full lg:w-1/2 flex flex-col gap-4'}>
                            <span className={'italic font-semibold'}>What can I use?</span>
                            <span className={'font-bold text-[36px]/[42px] lg:text-[48px]/[56px]'}>MY STACK</span>
                            <span className={'w-full lg:w-2/3'}>
                                I use a modern, high-performance stack, adapted to the current demands of web development. It enables me to design robust, scalable and optimised applications, both on the user interface and the server side.
                        </span>
                        </div>
                        <div className={'w-full lg:w-1/2 flex flex-col gap-4'}>

                            <div className={'w-full'}>
                                <span className={'font-bold italic'}>Languages</span>

                                <div className="w-full flex flex-wrap  gap-4 my-[20px]">
                                    {/* Icônes avec Tailwind inline */}
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <i className="devicon-html5-plain text-white text-5xl hover:scale-110 transition-transform" />
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            HTML
                                        </HoverCardContent>
                                    </HoverCard>
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
                                    <i className="devicon-express-original text-white text-5xl hover:scale-110 transition-transform" />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    <div className={'px-[20px] lg:px-[70px] xl:px-[100px] mx-auto py-[25px] lg:py-[50px]'}>
                        <span className={'font-bold italic'}>Works</span><br/>
                        <span className={'font-bold text-[36px]/[42px] lg:text-[48px]/[56px]'}>RECENTS PROJECTS</span>
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
                    <div className={'flex flex-col lg:flex-row gap-4 text-white px-[20px] lg:px-[70px] xl:px-[100px] py-[30px] lg:py-[100px] lg:mr-[70px] xl:mr-[100px] bg-gradient-to-r from-[#FFB147] to-[#B86ADF]'}>
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
            </div>
        </>
    );
};

export default Page;