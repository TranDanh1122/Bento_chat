import React from "react";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar";
export default function Layout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (<>
        <div className="container mb:max-w-none w-full h-full min-h-[100vh] flex rounded-[3rem] " >
            <Sidebar />
            <main className="w-auto min-w-[58%] h-full min-h-full bg-bsColor/15 p-3 backdrop-blur-xl  overflow-hidden">{children}</main>
            <RightBar />
        </div >
    </>)
}