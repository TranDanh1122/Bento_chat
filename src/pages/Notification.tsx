import React from "react";
import Sidebar from "../Layout/Sidebar";
import RightBar from "../Layout/RightBar";
export default function Notification(): React.JSX.Element {
    return (
        <div className="container mb:max-w-none w-full h-full min-h-[100vh] flex rounded-[3rem] " >
            <Sidebar />
            <main className="w-auto min-w-[58%] h-full min-h-full bg-bsColor/15 p-3 backdrop-blur-xl  overflow-hidden">

            </main >
            <RightBar />
        </div >
    )
}