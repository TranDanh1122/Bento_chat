import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
const User = React.memo(({ user, children, isOpen, isHideActive }: { user: User, children: React.ReactNode, isOpen?: boolean, isHideActive?: boolean }): React.JSX.Element => {
    return <div className="flex items-center justify-start gap-4 relative">
        {!isHideActive && <span className={clsx("w-3 h-3 rounded-full top-[10%] left-0 absolute", {
            "bg-slate-400": user.status != "active",
            "bg-green-400": user.status == "active"
        })}></span>
        }

        <img src={user.avatar ?? "/images/avt_5.png"} alt="" className="w-8 h-8 object-cover rounded-full" />
        {(isOpen || isOpen == undefined) && <div className="flex flex-col gap-1">
            <NavLink to="#" className="base-14_sm text-bsColor/95 text-opacity-80 text-nowrap text-ellipsis">{`${user.firstName} ${user.lastName}`}</NavLink>
            <span className="text-bsColor/50 text-opacity-45 caption">{user.cover}</span>
        </div>}
        {children}
    </div >
})
User.displayName = "User"
export default User