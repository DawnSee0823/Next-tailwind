import React, {useState} from 'react';
import MIcon from "../../assets/menu-icon.png";
import MenIcon from "../../assets/Rectangle 16.png";

export default function Float() {
    const [toggleMenu, setToggleMenu] = useState(true)
    const [menu, setMenu] = useState("grid")
    const [changeImg, setChangeImg] = useState(false)

    return (
        <div className={`${toggleMenu ? "w-[306px]" : "w-[56px]"}  transition-all pb-5`}>
            <div className={`bg-black flex flex-row p-2 rounded-[28px] "w-[306px]"`}>
                <div className='bg-white/25 cursor-pointer rounded-[38px] p-[10px] w-[40px] min-w-[40px] h-[40px] flex justify-center align-middle' 
                    onClick={() => setToggleMenu(!toggleMenu)}>
                    <img src={  MIcon.src} className="w-full h-full" />
                </div>
                {
                toggleMenu &&
                    <div className={`flex flex-row gap-[8px] ${toggleMenu ? "w-[250px] opacity-1" : "w-0 opacity-0"} transition-all `}>
                        <div className= {`ml-[8px] gap-[5px] bg-white/25 box-border h-full rounded-[38px] flex justify-center items-center align-middle`}>
                        <div className={`${menu === "grid" && "bg-[#333285]"} text-base text-white no-underline rounded-[38px] h-full px-[16px] flex items-center transition-all cursor-pointer`} onClick={() => setMenu("grid")}>Grid</div>
                        <div className={`${menu === "updates" && "bg-[#333285]"} text-base text-white no-underline rounded-[38px] h-full px-[16px] flex items-center transition-all cursor-pointer`} onClick={() => setMenu("updates")}>Updates</div>
                        </div>
                        {
                            !changeImg ?
                            <div className='bg-[#FCBD68] px-[16px] flex items-center text-base w-[76px] text-[#22222ca1] rounded-[38px]  break-keep cursor-pointer'
                                onClick={() => setChangeImg(!changeImg)}
                            >Log in</div>:
                            <img src={  MenIcon.src} onClick={() => setChangeImg(!changeImg)} className="w-[40px] h-[40px]" />
                        }
                    </div>
                }
            </div>
        </div>
    )
}
