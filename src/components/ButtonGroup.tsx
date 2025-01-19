import React from "react";
interface ButtonGroup {
    title: string,
    handleClick: () => void,
    default?: boolean
}
const ButtonGroup = React.memo(({ buttons }: { buttons: ButtonGroup[] }): React.JSX.Element => {
    const btnGroup = React.useRef<HTMLDivElement>(null)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, button: ButtonGroup) => {
        if (btnGroup && btnGroup.current) {
            btnGroup.current.querySelectorAll("button").forEach((btn) => btn.classList.remove("bg-[#f8f8f8]/30"));
            (e.target as HTMLButtonElement).classList.add("bg-[#f8f8f8]/30")
        }
        button.handleClick()
    }
    return (
        <div ref={btnGroup} className="flex items-center justify-start">
            {
                buttons.map(button => <button onClick={(e) => handleClick(e, button)} className={`w-full base_14_sm text-[#F8F8F8]/95 py-2 px-6 rounded-[6rem] ${button.default ? "bg-[#f8f8f8]/30" : ""} `}>{button.title}</button>)
            }

        </div >
    )
})
ButtonGroup.displayName = "ButtonGroup"
export default ButtonGroup