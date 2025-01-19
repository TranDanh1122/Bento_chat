import React from "react";
import { NavLink } from "react-router-dom";
const NAV_DATA = [
    { title: "Home", icon: "/images/home.svg", to: "/" },
    { title: "Notifications", icon: "/images/noti.svg", to: "/notifications" },
    { title: "Messages", icon: "/images/message.svg", to: "/messages" },
    { title: "Bookmarks", icon: "/images/bookmark.svg", to: "/bookmarks" },
    { title: "Profile", icon: "/images/profile.svg", to: "/profile" },
    { title: "Explode", icon: "/images/explode.svg", to: "/explode" }

]
const Nav = React.memo((): React.JSX.Element => {
    return <ul className="flex flex-col gap">
        {NAV_DATA.map(nav => (
            <li className="">
                <NavLink className={({ isActive }) => `base_14_sm flex items-center justify-start gap-4 p-3  rounded-xl
                ${isActive ? "text-white bg-bsColor/20" : "text-bsColor/50"}`}
                    to={`${nav.to}`}>
                    {({ isActive }) => (
                        <>
                            <i style={{
                                mask: `url(${nav.icon}) center/ contain no-repeat`,
                                WebkitMask: `url(${nav.icon}) center/ contain no-repeat`
                            }} className={`w-[1.125rem] h-[1.125rem] bg-bsColor/50 ${isActive ? "bg-white" : "bg-bsColor/50"}`}> </i>
                            {nav.title}
                        </>
                    )}
                </NavLink>
            </li>
        ))}
    </ul >
})
Nav.displayName = "Nav"
export default Nav