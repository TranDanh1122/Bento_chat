import React, { forwardRef } from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";
import User from "../components/User";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import clsx from "clsx";
const Sidebar = React.memo((): React.JSX.Element => {
    const { user } = useSelector((state: AppState) => state.auth)
    const menu = React.useRef<HTMLElement>(null)
    const [open, toogleSidebar] = React.useState<boolean>(true)
    return <aside ref={menu} className={clsx(" h-full min-h-full bg-bsColor/5 p-3 flex flex-col justify-between backdrop-blur-xl", {
        "w-2/12 min-w-[16.7%]": open,
        "w-fit min-w-fit": !open

    })}>
        <div className="flex flex-col items-center w-full">
            <div className={`flex items-center justify-between pb-3 ${open ? "w-full" : "w-fit"}`}>
                <img onClick={() => toogleSidebar(true)} src="/images/logo.png" alt="logo" className="w-9 h-9 object-cover" />
                {open && <span onClick={() => toogleSidebar(false)} className="p-2 rounded-full border-[1.5px] border-solid border-[#fff]/40 bg-[rgba(40, 40, 40, 0.70)]" style={{
                    boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset",
                    backdropFilter: "blur(50px)"
                }}>
                    <img src="/images/sidebar-collapse-icon.svg" alt="" className="w-6 h-6 object-cover" />
                </span>}
            </div>
            <Nav isOpen={open} />
        </div>

        <div className="flex flex-col items-center gap-2">
            <User isOpen={open} user={user} >
                {open && <Ultility />}
            </User>
            <button type="button" className={clsx(`base_14_sm  py-3 rounded-full border-solid border-[1px] border-bsColor/10 text-bsColor text-opacity-80 bg-[#282828]/70 flex items-center justify-center gap-2`, {
                "w-full": open,
                "w-fit px-4": !open
            })} >
                {open ? "Post" : "+"}
            </button>
        </div>
    </aside>
})
Sidebar.displayName = "Sidebar"
export default Sidebar
export const Ultility = (): React.JSX.Element => {
    const toogle = React.useRef<HTMLSpanElement>(null)
    const handleClick = () => {
        if (toogle && toogle.current) {
            const wrap = toogle.current.querySelector("div")
            if (!wrap) return
            if (wrap.classList.contains("hidden")) {
                wrap.classList.remove("hidden")
                wrap.classList.add("flex")
            } else {
                wrap.classList.remove("flex")
                wrap.classList.add("hidden")
            }
        }
    }
    React.useEffect(() => {
        const outSideTouch = (e: React.MouseEvent<HTMLElement>) => {
            if (toogle && toogle.current) {
                const wrap = toogle.current.querySelector("div")
                if (!wrap) return
                if (wrap.classList.contains("hidden")) return
                if ((e.target as HTMLElement).classList.contains("elipsis")
                    || (e.target as HTMLElement).closest(".elipsis")) return
                wrap.classList.add("hidden")
                wrap.classList.remove("flex")
            }
        }
        document.addEventListener("click", (e) => outSideTouch(e))
        return () => document.removeEventListener("click", (e) => outSideTouch(e))
    })
    return <span onClick={handleClick} ref={toogle} className="w-8 elipsis cursor-pointer h-8 flex items-center justify-center ml-auto relative">
        <img src="/images/elipsis.svg" alt="" className="w-6 h-1 object-contain " />
        <div className="absolute top-0 translate-y-[-100%] left-0 translate-x-[-25%] hidden flex-col rounded-3xl bg-bsColor/20 p-2 w-max h-fit">
            <button><img src="/images/setting.svg" className="w-9 h-8 object-cover" alt="" /> </button>
            <button><img src="/images/logout.svg" className="w-9 h-8 object-cover" alt="" /> </button>
        </div>
    </span>
}