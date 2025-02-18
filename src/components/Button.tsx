import React from "react";
interface ButtonProps {
    text: string,
    icon?: string,
    type: "submit" | "button" | "reset",
    onClick?: () => void
}
const Button = React.memo(({ text, type, icon, onClick }: ButtonProps): React.JSX.Element => {
    return (<button onClick={onClick} type={type} className="base_14_sm w-full py-4 rounded-[2rem] border-solid border-[1px] border-[#F8F8F8]/10 text-[#F8F8F8] text-opacity-80 bg-[#282828]/70 flex items-center justify-center gap-2" >
        {icon && <img className="w-6 h-6 object-cover" src={icon} />}
        {text}
    </button>)
})
Button.displayName = "Button"
export default Button