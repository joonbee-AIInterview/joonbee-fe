import LinkButton from "@/components/@common/linkButton";
import { AnimationNumberRise } from "@/components/landing/AnimationNumberRise";
import { AnimationText } from "@/components/landing/AnimationText";
import CardSlider from "@/components/landing/CardSlider";
import Image from "next/image";

export default function LandingPage() {
    return (
        <main className="px-20 pb-20 w-full max-md:px-0">
            <section className="flex flex-row items-center justify-between w-full px-10 max-md:flex-col max-md:px-0">
                <div className="overflow-hidden">
                    <div className="text-[50px] pt-20 space-y-3 animate-slideLeft">
                        <div className="text-[#275ADC] font-bold leading-6">
                            JOONBEE
                        </div>
                        <div className="font-bold max-md:text-[22px] max-sm:text-[8px]">
                            개발자를 위한 AI 면접 서비스
                        </div>
                    </div>
                </div>
                <Image src="/landingLogo.png" alt="Joonbee" width={220} height={180} className="animate-[spin_10s_linear_infinite] max-md:hidden"/>
            </section>

            <section className="flex justify-center h-[600px] items-center">
               <div className="w-[1350px] h-full flex flex-col justify-center overflow-hidden space-y-7 relative"> {/** w-1200 */}
                    {/* <div className="absolute z-20 inset-y-0 left-0 w-16 bg-gradient-to-r rounded-lg"  style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb, transparent)' }}></div> */}
                        <CardSlider direction="left" imageNames={["aos","c_c","cHash", "flutter", "git", "nodejs"]}/>
                       <CardSlider direction="right" imageNames={["html:css","ios","nextjs", "react", "react_native", "javascript"]}/>
                        <CardSlider direction="left" imageNames={["rebbitMQ","spring-framework","vuejs", "java", "kotlin", "swift"]}/>
                    {/* <div className="absolute z-20 inset-y-0 right-0 w-16 bg-gradient-to-l rounded-lg"  style={{ backgroundImage: 'linear-gradient(to left, #e5e7eb, transparent)' }}></div> */}
               </div>
            </section>

            <section className="h-[250px] w-full mb-5 max-md:mb-0 max-md:h-[200px]">
                <div>
                    <AnimationText>
                        <span className="text-[#275ADC] text-[67px] font-bold max-md:px-2 max-md:text-[30px] max-xs:text-[25px]">
                            기술면접이 두려운 당신에게
                        </span>
                        <span className="font-semibold text-[35px] text-[#919FC5] max-md:text-[26px]">
                            JOONBEE가 함께합니다.
                        </span>
                    </AnimationText>
                </div>    
            </section>

            <section className="flex flex-row w-full justify-between max-md:px-10">
                <AnimationNumberRise firstMAX={9000} secondMAX={224} thirdMAX={200}/>
                <Image src={"/landing/landing_1.png"} alt="test" width={600} height={200} className="max-md:hidden"/>
            </section>  

            <section className="w-full flex justify-center items-center h-[350px]">
                <AnimationText>
                    <span className="text-[67px] font-bold max-md:px-2 max-md:text-[30px] max-xs:text-[25px] mb-5">
                        <span className="text-[#275ADC]">준비</span>
                        <span className="text-gray-500 text-gray-normal"> 되었다면 시작해볼까요?</span>
                    </span>

                    <LinkButton size="xl" color="blue" path="/">
                        면접 시작하기
                    </LinkButton>
                </AnimationText>
            </section>
        </main>
    )
}