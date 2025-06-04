import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Head from "next/head";

const Page = () => {
    return (
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
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default Page;