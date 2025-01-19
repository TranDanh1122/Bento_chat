import React from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";
import User from "../components/User";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
const Sidebar = React.memo((): React.JSX.Element => {
    const { user } = useSelector((state: AppState) => state.auth)
    console.log(user);

    const menu = React.useRef<HTMLElement>(null)
    return <aside ref={menu} className=" w-2/12 h-full min-h-full bg-[#f8f8f8]/5 p-3 flex flex-col justify-between backdrop-blur-xl" >
        <div>
            <div className="flex items-center justify-between pb-3">
                <img src="/images/logo.png" alt="logo" className="w-9 h-9 object-cover" />
                <span className="p-2 rounded-full border-[1.5px] border-solid border-[#fff]/40 bg-[rgba(40, 40, 40, 0.70)]" style={{
                    boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset",
                    backdropFilter: "blur(50px)"
                }}>
                    <img src="/images/sidebar-collapse-icon.svg" alt="" className="w-6 h-6 object-cover" />
                </span>
            </div>
            <Nav />
        </div>

        <div className="flex flex-col gap-2">
            <User user={user} >
                <span className="w-8 cursor-pointer h-8 flex items-center justify-center ml-auto">
                    <img src="/images/elipsis.svg" alt="" className="w-6 h-1 object-contain" />
                </span>
            </User>
            <Button text="Post" type="button" />
        </div>
    </aside>
})
Sidebar.displayName = "Sidebar"
export default Sidebar