import { LoginInfo } from "./LoginInfo";
import { HomeHeader } from "./secondHeader/homeHeader";
import { InterviewHeader } from "./secondHeader/interviewHeader";
import { MyHeader } from "./secondHeader/myHeader";

interface Props {
    pathname: string;
    isOpen: boolean;
}
export default function SubHeader({ pathname, isOpen }: Props) {
    return (
        <div
            className="w-full h-[54px] effect-white flex items-center">
            <LoginInfo />
            <div className="flex items-center justify-between w-full overflow-hidden ">
            <div className={`flex px-2 w-full ${isOpen && 'min-w-[320px]'}`}>
                {pathname === '/' && <HomeHeader />}
                <InterviewHeader />
                {pathname === '/my' && <MyHeader />}
            </div>
            </div>
      </div>
    )
}