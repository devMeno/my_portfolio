"use client"
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import 'devicon/devicon.min.css'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {useRouter} from "next/navigation";

const ibm = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["100","200","300","400","500"],
})

/*export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const router = useRouter();
    const handleGoToHome = () => {router.push("/home");};
    const handleGoToContact = () => {router.push("/contact");};
    const handleGoToBlog = () => {router.push("/blog");};

  return (
    <html lang="en">

      <body
        className={`${ibm.className} antialiased`}
      >
        <div className={'hidden lg:block lg:flex'}>
            <div className={'fixed flex flex-col bg-[#141313] w-[20%] shrink-0 h-screen sticky top-0 p-[40px] justify-between text-white'}>
                <div className={'size-[50px] rounded-full bg-white'}></div>
                <div>
                    <ul className={'flex flex-col text-[20px] gap-[20px]'}>
                        <button onClick={handleGoToHome} className={'w-fit'}><li>HOME</li></button>
                        <button onClick={handleGoToContact} className={'w-fit'}><li>CONTACT</li></button>
                        <button onClick={handleGoToBlog} className={'w-fit'}><li>BLOG</li></button>
                    </ul>
                </div>
                <div>
                    <span className={'text-[12px]'}>Copyright ©2024 Amen Charles LOKONON. All right reserved.</span>
                </div>
            </div>
            <div className={'flex-1 min-w-0 overflow-y-scroll'}>
                {children}
            </div>
        </div>

        <div className={'lg:hidden'}>
            <div className={'bg-transparent w-full h-[60px] p-[10px] flex justify-between items-center'}>
                <div className={'size-[50px] rounded-full bg-black'}></div>
                <Sheet>
                    <SheetTrigger>
                        <div className={'size-[50px] rounded-full border border-2 border-black flex items-center'}>
                            <span></span>
                        </div>
                    </SheetTrigger>
                    <SheetContent className={'bg-[#141313]'}>
                        <SheetTitle/>
                        <div className={'relative flex flex-col h-full text-white'}>
                            <ul className={'flex flex-col text-[20px] gap-[20px] text-center items-center'}>
                                <button onClick={handleGoToHome} className={'w-fit'}><li>HOME</li></button>
                                <button onClick={handleGoToContact} className={'w-fit'}><li>CONTACT</li></button>
                                <button onClick={handleGoToBlog} className={'w-fit'}><li>BLOG</li></button>
                            </ul>
                            <div className={'absolute bottom-[20px] text-center w-full'}>
                                <span>Copyright ©2024 Fawzi Sayed. All right reserved.</span>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div>
                {children}
            </div>
            <div className={'flex flex-col gap-[15px] text-center py-[15px] text-white bg-black'}>
                <ul className={'flex text-[14px] gap-[20px] text-center items-center mx-auto w-fit'}>
                    <button onClick={handleGoToHome} className={'w-fit'}><li>Home</li></button>
                    <button onClick={handleGoToContact} className={'w-fit'}><li>Contact</li></button>
                    <button onClick={handleGoToBlog} className={'w-fit'}><li>Blog</li></button>
                </ul>
                <span className={'text-[10px]'}>Copyright ©2024 Amen Charles LOKONON. All right reserved.</span>
            </div>
        </div>

      </body>
    </html>
  );
}
