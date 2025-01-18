import React from "react";
import clsx from "clsx";
import { NotificationContext } from "../context/NotificationContext";

export default function Modal(): React.JSX.Element {
    const { noti, pushNotify } = React.useContext(NotificationContext)

    const notiRef = React.useRef<HTMLDivElement>(null)
    const hide = () => {
        if (notiRef.current) {
            notiRef.current.style.transform = "translate(-100% , 0%)"
            notiRef.current.style.opacity = "0"

        }
        setTimeout(() => {
            pushNotify({ type: "HIDE" })
        }, 300)
    }
    React.useEffect(() => {
        if (notiRef && notiRef.current) {
            notiRef.current.style.transform = "translate(0% , 0%)"
            notiRef.current.style.opacity = "1"

            setTimeout(() => {
                hide()
            }, noti.showTime)
        }
    }, [])

    return (<div ref={notiRef} className={clsx(`absolute top-0  px-6 py-4 
        right-0 w-fit min-w-52 max-w-1/5 h-fit 
        max-h-[15vh] text-wrap text-ellipsis 
        flex gap-4 items-center justify-start
        transition-all duration-300 ease-linear
        translate-x-[-100%] opacity-0
        `, {
        "bg-green-400": noti.type == "success",
        "bg-red-400": noti.type == "error",
    })}>
        <span onClick={hide} className="small_sm cursor-pointer text-white">x</span>
        <span className="small_sm text-white">{noti.title}</span>
    </div>)
}

