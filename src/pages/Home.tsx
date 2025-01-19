import React from "react";
import { useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store";
import { listPost } from "../redux/homeSlicer";
import { NotificationContext } from "../context/NotificationContext";
import { profile } from "../redux/authSlicer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";

export default function Home(): React.JSX.Element {

    const { posts, loading, user } = useFetchAPI()
    const menu = React.useRef<HTMLElement>(null)
    if (loading) return <>Loading..</>

    return (
        <div className="container mb:max-w-none w-full h-full min-h-[100vh] flex rounded-[3rem] " >
            <aside ref={menu} className=" w-2/12 h-full min-h-full bg-black p-3 flex flex-col justify-between" >
                <div>
                    <div className="flex items-center justify-between py-3">
                        <img src="/images/logo.png" alt="logo" className="w-9 h-9 object-cover" />
                        <span className="p-2 rounded-full border-[1.5px] border-solid border-[#fff]/40 bg-[rgba(40, 40, 40, 0.70)]" style={{
                            boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset",
                            backdropFilter: "blur(50px)"
                        }}>
                            <img src="/images/sidebar-collapse-icon.svg" alt="" className="w-6 h-6 object-cover" />
                        </span>
                    </div>
                    <Nav />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-start gap-4">
                        <img src={user.avatar ?? "/images/avt_5.png"} alt="" className="w-8 h-8 object-cover rounded-full" />
                        <div className="flex flex-col gap-1">
                            <span className="base-14_sm text-[#F8F8F8]/70 text-opacity-80 text-nowrap text-ellipsis">{`${user.firstName} ${user.lastName}`}</span>
                            <span className="text-[#F8F8F8]/50 text-opacity-45 caption">@kohaku</span>
                        </div>
                        <span className="w-8 cursor-pointer h-8 flex items-center justify-center ml-auto">
                            <img src="/images/elipsis.svg" alt="" className="w-6 h-1 object-contain" />
                        </span>
                    </div>
                    <Button text="Post" type="button" />
                </div>
            </aside>
            <main className="bg-red-200 w-7/12 h-full min-h-full">
                2
            </main>
            <aside className="bg-green-200 w-3/12 h-full min-h-full">
                2
            </aside>
        </div>
    )
}


const useFetchAPI = () => {
    const { loading, filter, error, posts } = useSelector((state: AppState) => state.home)
    const { error: authError, user } = useSelector((state: AppState) => state.auth)
    const { pushNotify } = React.useContext(NotificationContext)
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        // const fetchPosts = async () => {
        //     try {
        //         await dispatch(listPost({ data: filter }))
        //     } catch (e: unknown) {
        //         pushNotify({
        //             type: "SHOW",
        //             payload: {
        //                 title: error,
        //                 type: "error",
        //                 isShow: true,
        //                 showTime: 3000
        //             }
        //         })
        //     }
        // }
        // fetchPosts()

    }, [filter])
    React.useEffect(() => {
        // const fetchUser = async () => {
        //     try {
        //         await dispatch(profile())
        //     } catch (e: unknown) {
        //         console.log(e);
        //         pushNotify({
        //             type: "SHOW",
        //             payload: {
        //                 title: authError,
        //                 type: "error",
        //                 isShow: true,
        //                 showTime: 3000
        //             }
        //         })
        //     }
        // }
        // fetchUser()
    }, [])
    return { posts, loading, user }
}