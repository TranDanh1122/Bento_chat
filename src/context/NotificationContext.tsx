import React from "react";
interface Notify {
    title: string,
    type: "error" | "success",
    showTime: number,
    isShow: boolean
}
type NotiActionType = { type: "SHOW", payload: Notify } | { type: "HIDE" }
const notifyReducer = (noti: Notify, action: NotiActionType) => {
    switch (action.type) {
        case "SHOW": {            
            return { ...action.payload }
        }
        case "HIDE": return { ...noti, isShow: false }
    }
}
export const NotificationContext = React.createContext<{ noti: Notify, pushNotify: React.Dispatch<NotiActionType> }>({ noti: {} as Notify, pushNotify: () => { } })

const initData: Notify = {
    title: "",
    type: "error",
    showTime: 0,
    isShow: false
}
export default function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [noti, pushNotify] = React.useReducer(notifyReducer, initData)
    return <NotificationContext.Provider value={{ noti, pushNotify }}>
        {children}
    </NotificationContext.Provider>
}