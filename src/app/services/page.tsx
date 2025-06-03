import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Page = () => {
    return (
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
    );
};

export default Page;