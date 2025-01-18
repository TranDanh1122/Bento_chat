import React from "react";
import { NavLink } from "react-router-dom";
interface InputProps {
    label: string,
    name: string,
    placeholder: string,
    type: string,
    hasToolTip?: boolean,
    tooltip?: string
    error: React.RefObject<HTMLSpanElement>
}
const Input = React.forwardRef<HTMLInputElement, InputProps>((({ label, name, type, placeholder, hasToolTip, error, tooltip }, ref) => {
    const tipMessage = React.useRef<HTMLSpanElement>(null)
    const showTip = () => {
        if (tipMessage.current) tipMessage.current.style.display = "block"
    }
    const hideTip = () => {
        if (tipMessage.current) tipMessage.current.style.display = "none"
    }
    const handleFocusOrBlur = (isFocused: boolean) => {
        if (typeof ref === "function") return;
        if (ref && ref.current) {
            ref.current.style.backgroundColor = isFocused ? "transparent" : "#383838";
            ref.current.style.border = isFocused ? "1px solid #F8F8F8" : "unset";

            const label = ref.current.parentElement?.querySelector("label");
            const tip = ref.current.parentElement?.querySelector(".tip") as HTMLImageElement;
            const eye = ref.current.parentElement?.querySelector(".eye") as HTMLImageElement;

            if (label) label.style.display = isFocused ? "block" : "none";
            if (tip) tip.style.display = isFocused ? "none" : "block";
            if (eye) eye.style.display = isFocused ? "block" : "none";
        }
    };
    const showPass = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault()
        const el = e.target as HTMLImageElement
        const data = el.dataset.src
        const src = el.getAttribute("src")
        el.setAttribute("src", data ?? "")
        el.dataset.src = src ?? ""
        if (typeof ref === "function") return;
        if (ref && ref.current) {
            if (ref.current.getAttribute("type") === "text") {
                ref.current.setAttribute("type", "password");
            } else {
                ref.current.setAttribute("type", "text");
            }
        }
    }
    return (
        <div className="relative">
            <label className="absolute top-[-0.5rem] z-10 left-[.5rem] bg-[#302f30] px-2 py-1 w-fit h-fit small text-[#f8f8f8]/80 hidden" htmlFor={name}>{label}</label>
            <input autoComplete="off" onFocus={() => handleFocusOrBlur(true)} onBlur={() => handleFocusOrBlur(false)} onChange={() => { if (error.current) error.current.textContent = "" }} type={type}
                className="base_14_r w-full relative z-0 outline-none text-[#F8F8F8] bg-[#383838] rounded-xl px-5 py-4"
                name={name} placeholder={placeholder} ref={ref} />
            <span ref={error} className="text-red-600 "></span>
            {type == "password" && <NavLink to="/auth/forgot" className="caption_r text-[#F8F8F8]/50 underline block w-fit text-right mt-3 ml-auto ">Forgot password</NavLink>}
            {type == "password" && <img onMouseDown={(e) => showPass(e)} data-src="/images/eye-show.svg" src="/images/eye.svg" className="eye w-6 h-6 object-cover absolute top-0 right-0 hidden" style={{ transform: "translate(-50% , 50%)" }} />}
            {hasToolTip && <img onMouseLeave={hideTip} onMouseEnter={showTip} className="absolute tip cursor-pointer top-[.5rem] right-[1rem] w-3 h-3 object-cover rounded-full  bg-[#F8F8F8]/50" />}
            {hasToolTip && <span ref={tipMessage} className="bg-slate-600 rounded-md w-max top-[2rem] right-0 absolute h-fit line px-2 py-1 text-white hidden">{tooltip}</span>}
        </div >

    )
}))
Input.displayName = "Input"
export default Input