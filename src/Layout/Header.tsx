import React from "react";
import ButtonGroup from "../components/ButtonGroup";
const Header = React.memo(() => {
    return <div className="flex items-center justify-start gap-2">
        <div className="w-1/3">
            <ButtonGroup buttons={
                [
                    { title: "For you", handleClick: () => { }, default: true },
                    { title: "Following", handleClick: () => { } }
                ]
            } />
        </div>

        <div className="relative flex-grow">
            <img src="/images/search-icon.svg" className="w-6 h-6 object-cover absolute top-[50%] translate-y-[-50%] translate-x-[50%] left-0" alt="" />
            <input type="text" className="base_14_r outline-none py-3 pl-12 pr-3 w-full rounded-3xl text-bsColor/95 bg-[#202020]" placeholder="Search..." />
        </div>
        <img src="/images/add.svg" className="w-12 h-12 object-cover" alt="" />
    </div>
})
Header.displayName = "Header"
export default Header