import React from "react";
import { NavLink } from "react-router-dom";
interface InputProps {
    name: string,
    placeholder: string,
    type: string,
    hasToolTip?: boolean,
    tooltip?: string
    error: React.RefObject<HTMLSpanElement>
}
const Input = React.forwardRef<HTMLInputElement, InputProps>((({ name, type, placeholder, hasToolTip, error, tooltip, ...props }, ref) => {
    const tipMessage = React.useRef<HTMLSpanElement>(null)
    const showTip = () => {
        if (tipMessage.current) tipMessage.current.style.display = "block"
    }
    const hideTip = () => {
        if (tipMessage.current) tipMessage.current.style.display = "none"
    }

    return (
        <div className="relative">
            <input onChange={() => { if (error.current) error.current.textContent = "" }} type={type} className="base_14_r w-full border-[#F8F8F8]/5% border-solid boder-[1px] text-[#F8F8F8] bg-[#383838] rounded-xl px-5 py-4"
                name={name} placeholder={placeholder} ref={ref} />
            <span ref={error} className="text-red-600 "></span>
            {type == "password" && <NavLink to="/auth/forgot" className="caption_r text-[#F8F8F8]/50 underline block text-right mt-3 ">Forgot password</NavLink>}

            {hasToolTip && <img onMouseLeave={hideTip} onMouseEnter={showTip} className="absolute cursor-pointer top-[.5rem] right-[1rem] w-3 h-3 object-cover rounded-full bg-[#F8F8F8]/50" />}
            {hasToolTip && <span ref={tipMessage} className="bg-slate-600 rounded-md w-max top-[2rem] right-0 absolute h-fit line px-2 py-1 text-white hidden">{tooltip}</span>}
        </div >

    )
}))
Input.displayName = "Input"
export default Input