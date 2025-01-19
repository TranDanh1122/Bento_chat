import React from "react";
import Button from "./Button";
export default function AddPost(): React.JSX.Element {
    const ref = React.useRef<HTMLDivElement>(null)
    const handleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
        const el = e.target as HTMLTextAreaElement
        el.classList.add("bg-[#202020]")
        el.classList.remove("bg-bsColor/15")
        if (ref && ref.current) {
            ref.current.querySelector(".ult")?.classList.add("flex")
            ref.current.querySelector(".ult")?.classList.remove("hidden")
            el.rows = 5
        }
    }
    React.useEffect(() => {
        const outSideClick = (e: React.MouseEvent<HTMLElement>) => {
            if ((e.target as HTMLElement).closest(".postForm")) return
            if (ref && ref.current) {
                ref.current.querySelector(".ult")?.classList.add("hidden")
                ref.current.querySelector(".ult")?.classList.remove("flex")
                const texteArea = ref.current.querySelector("textarea")
                if (texteArea) {
                    texteArea.rows = 3
                    texteArea.classList.add("bg-bsColor/15")
                    texteArea.classList.remove("bg-[#202020]")
                }
            }
        }
        document.addEventListener("click", (e) => outSideClick(e))
        return () => document.removeEventListener("click", (e) => outSideClick(e))
    }, [])

    return (<div ref={ref} className="relative postForm">
        <img src="/images/avt_5.png" alt="" className="w-12 h-12 object-cover rounded-full absolute top-4 left-2 z-30" />
        <textarea rows={3} placeholder="Start a post..." onClick={(e) => handleClick(e)} className="w-full h-fit text-bsColor bg-bsColor/15 rounded-xl pl-20 outline-none p-3 relative z-20"></textarea>
        <div className=" hidden translate-y-[-20%] justify-between px-2 items-center w-full relative z-20 bg-[#202020] rounded-b-xl  ult">
            <div className="flex">
                <span className="p-5 cursor-pointer"><img src="/images/underline-icon.svg" alt="" className="w-6 h-6 object-cover" /></span>
                <span className="p-5 cursor-pointer"><img src="/images/images.svg" alt="" className="w-6 h-6 object-cover " />  </span>
                <span className="p-5 cursor-pointer"><img src="/images/video.svg" alt="" className="w-6 h-6 object-cover " />  </span>
                <span className="p-5 cursor-pointer"><img src="/images/tag.svg" alt="" className="w-6 h-6 object-cover " />  </span>
            </div>
            <button type="button" className="base_14_sm w-fit py-3 px-6 rounded-[2rem] border-solid border-[1px]
             border-bsColor/10 text-bsColor text-opacity-80 bg-[#282828] flex items-center justify-center gap-2" >
                Post
            </button>
        </div>

    </div>)
}