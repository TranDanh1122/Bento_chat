import React from "react";
import { useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store";
import { listPost } from "../redux/homeSlicer";
import { NotificationContext } from "../context/NotificationContext";
import { profile } from "../redux/authSlicer";
import { useDispatch } from "react-redux";
import RightBar from "../Layout/RightBar";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import AddPost from "../components/AddPost";
import PostItem from "../components/PostItem";
import { v4 } from "uuid";
export default function Home(): React.JSX.Element {

    const { posts, loading } = useFetchAPI()
    if (loading) return <>Loading..</>

    return (
        <div className="container mb:max-w-none w-full h-full min-h-[100vh] flex rounded-[3rem] " >
            <Sidebar />
            <main className=" w-7/12 h-full min-h-full bg-bsColor/15 p-3 backdrop-blur-xl  overflow-hidden">
                <Header />
                <div className="py-2 flex h-full flex-col">
                    <AddPost />
                    <div className="flex flex-col h-full overflow-y-scroll scrollbar-none">
                        <div className="bg-bsColor/10 p-3 rounded-xl flex gap-4 items-start justify-start">
                            <img src="/images/avatar-2.png" className="w-11 h-11 object-cover" />
                            <div className="flex flex-wrap items-center gap-2 gap-y-4">
                                <h2 className="base_14_m text-bsColor/95 text-opacity-80">Moyo Shiro</h2>
                                <span className="caption_r text-bsColor/50">09:00 AM</span>
                                <p className="text-bsColor/70 text-opacity-80 body_14_r">Just launched my new portfolio website! 🚀
                                    Check out these 15 standout examples of creative,
                                    sleek, and interactive portfolio designs that inspired me.
                                    Which one's your favorite? #WebDesign #PortfolioInspiration
                                    <img src="/images/photo.png" className="w-auto h-auto aspect-auto max-w-full max-h-[300px] rounded-3xl" />
                                </p>
                                <div className="flex items-center justify-start gap-4 w-full caption_sm text-bsColor/50">
                                    <span className="flex items-center gap-2 "><img src="/images/noti.svg" className="w-5 h-4 object-contain" /> 12</span>
                                    <span className="flex items-center gap-2"><img src="/images/repost-icon.svg" className="w-5 h-4 object-contain" /> 12</span>
                                    <span className="flex items-center gap-2"><img src="/images/comment-icon.svg" className="w-5 h-4 object-contain" /> 12</span>
                                    <img src="/images/bookmark-icon.svg" className="w-5 h-4 object-contain ml-auto" />
                                    <img src="/images/share-icon.svg" className="w-5 h-4 object-contain" />
                                </div>

                            </div>
                        </div>
                        {posts &&
                            posts.map(post => <PostItem post={post} key={v4()} />)
                        }
                    </div>
                </div>
            </main >
            <RightBar />
        </div >
    )
}


const useFetchAPI = () => {
    const { loading, filter, error, posts } = useSelector((state: AppState) => state.home)
    const { error: authError } = useSelector((state: AppState) => state.auth)
    const { pushNotify } = React.useContext(NotificationContext)
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                await dispatch(listPost({ data: filter }))
            } catch (e: unknown) {
                pushNotify({
                    type: "SHOW",
                    payload: {
                        title: error,
                        type: "error",
                        isShow: true,
                        showTime: 3000
                    }
                })
            }
        }
        fetchPosts()
    }, [filter])
    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                await dispatch(profile())
            } catch (e: unknown) {
                console.log(e);
                pushNotify({
                    type: "SHOW",
                    payload: {
                        title: authError,
                        type: "error",
                        isShow: true,
                        showTime: 3000
                    }
                })
            }
        }
        fetchUser()
    }, [])
    return { posts, loading }
}