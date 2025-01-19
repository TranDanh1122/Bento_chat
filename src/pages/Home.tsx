import React from "react";
import { useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store";
import { listPost } from "../redux/homeSlicer";
import { NotificationContext } from "../context/NotificationContext";
import { profile } from "../redux/authSlicer";
import { useDispatch } from "react-redux";
import RightBar from "../Layout/RightBar";
import Sidebar from "../Layout/Sidebar";
export default function Home(): React.JSX.Element {

    const { posts, loading } = useFetchAPI()
    if (loading) return <>Loading..</>

    return (
        <div className="container mb:max-w-none w-full h-full min-h-[100vh] flex rounded-[3rem] " >
            <Sidebar />
            <main className="bg-red-200 w-7/12 h-full min-h-full">
                2
            </main>
            <RightBar />
        </div>
    )
}


const useFetchAPI = () => {
    const { loading, filter, error, posts } = useSelector((state: AppState) => state.home)
    const { error: authError } = useSelector((state: AppState) => state.auth)
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
    return { posts, loading }
}