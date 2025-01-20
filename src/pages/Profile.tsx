import React from "react";
import Sidebar from "../Layout/Sidebar";
import RightBar from "../Layout/RightBar";
import ButtonGroup from "../components/ButtonGroup";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import PostItem from "../components/PostItem";
import { v4 } from "uuid";
export default function Profile(): React.JSX.Element {
    const [viewing, setViewing] = React.useState<string>("posts")
    const { posts } = useSelector((state: AppState) => state.home)
    const [edit, setEdit] = React.useState<boolean>(false)
    return (<>
        <div className="container mb:max-w-none w-full h-full min-h-[100vh] flex rounded-[3rem] " >
            <Sidebar />
            <main className="w-auto min-w-[50%] h-full min-h-full bg-bsColor/15  backdrop-blur-xl  overflow-hidden">
                <div className="w-full h-[17vh] bg-[url(/images/profile.png)] bg-no-repeat bg-center p-3 bg-[100%,100%] flex  flex-wrap justify-between items-start">
                    <button ><img src="/images/back.svg" className="w-[2.75rem] h-[2.75rem] object-cover" /></button>
                    <button ><img src="/images/three_dot.svg" className="w-[2.75rem] h-[2.75rem] object-cover ml-aut" /></button>
                </div>
                <div className=" px-6">
                    <img src="/images/avt_profile.png" className="w-20 h-20 object-cover rounded-full translate-x-[10%] translate-y-[-55%]" />

                    {!edit && <>
                        <div className="flex items-center justify-start gap-3">
                            <div>
                                <h1 className="title text-bsColor/95">Kohaku Tora</h1>
                                <span className="base_14_r text-bsColor/50 text-opacity-80">@moyoshiro</span>
                            </div>
                            <button className="ml-auto"><img src="/images/share.png" className="w-[2.75rem] h-[2.75rem] object-cover" /></button>
                            <button onClick={() => setEdit(true)} className="rounded-3xl bg-[#202020] text-bsColor/70 base_14_sm px-6 py-3 ">Edit profile</button>
                        </div>
                        <p className="body-14_2 text-bsColor/70 mt-5">🎨 UI/UX Designer | 💡 Crafting seamless digital experiences🚀 Designing user-centric interfaces📍 NYC | Post on #Design #UX #UI</p>
                        <div className="flex items-center gap-6 mt-6">
                            <button className="base_14_r text-bsColor/50 text-opacity-80 flex items-center gap-1">
                                <img src="/images/comment-icon.svg" className="w-5 h-5 object-contain" />
                                <span className=" text-bsColor/70 ">8</span>
                                post
                            </button>
                            <button className="base_14_r text-bsColor/70 text-opacity-80 flex items-center gap-1">
                                <img src="/images/people.svg" className="w-5 h-5 object-contain" />
                                <span className=" text-bsColor/70 ">8</span>
                                followers
                            </button>
                            <button className="base_14_r text-bsColor/70 text-opacity-80 flex items-center gap-1">
                                <img src="/images/link.svg" className="w-5 h-5 object-contain" />
                                <span className=" text-bsColor/70 ">8</span>
                                https://linktr.ee/tranmautritam
                            </button>
                        </div>
                        <div className="w-full mt-9">
                            <ButtonGroup buttons={
                                [
                                    { title: "Post", handleClick: () => { setViewing("posts") }, default: true },
                                    { title: "Featured", handleClick: () => { setViewing("featured") } },
                                    { title: "Media", handleClick: () => { setViewing("media") } }
                                ]
                            } />
                        </div>

                        {viewing == "posts" && <div className=" h-full max-h-[50vh] overflow-y-scroll scrollbar-none flex flex-col gap-4 py-6">
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
                                        <span className="flex items-center gap-2 ">
                                            <i style={{
                                                mask: "url(/images/noti.svg) center / contain no-repeat",
                                                WebkitMask: "url(/images/noti.svg) center / contain no-repeat"
                                            }} className={`w-5 h-4 bg-red-500 fill-current`}></i>
                                            12
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <img src="/images/repost-icon.svg" className="w-5 h-4 object-contain" />
                                            12
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <img src="/images/comment-icon.svg" className="w-5 h-4 object-contain" />
                                            12
                                        </span>
                                        <img src="/images/bookmark-icon.svg" className="w-5 h-4 object-contain ml-auto" />
                                        <img src="/images/share-icon.svg" className="w-5 h-4 object-contain" />
                                    </div>

                                </div>
                            </div>
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
                                        <span className="flex items-center gap-2 ">
                                            <i style={{
                                                mask: "url(/images/noti.svg) center / contain no-repeat",
                                                WebkitMask: "url(/images/noti.svg) center / contain no-repeat"
                                            }} className={`w-5 h-4 bg-red-500 fill-current`}></i>
                                            12
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <img src="/images/repost-icon.svg" className="w-5 h-4 object-contain" />
                                            12
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <img src="/images/comment-icon.svg" className="w-5 h-4 object-contain" />
                                            12
                                        </span>
                                        <img src="/images/bookmark-icon.svg" className="w-5 h-4 object-contain ml-auto" />
                                        <img src="/images/share-icon.svg" className="w-5 h-4 object-contain" />
                                    </div>

                                </div>
                            </div>
                            {posts &&
                                posts.map(post => <PostItem post={post} key={v4()} />)
                            }
                        </div>}

                        {
                            viewing == "featured" && <div className=" h-full max-h-[50vh] overflow-y-scroll scrollbar-none flex flex-col gap-4 py-6">
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
                                            <span className="flex items-center gap-2 ">
                                                <i style={{
                                                    mask: "url(/images/noti.svg) center / contain no-repeat",
                                                    WebkitMask: "url(/images/noti.svg) center / contain no-repeat"
                                                }} className={`w-5 h-4 bg-red-500 fill-current`}></i>
                                                12
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <img src="/images/repost-icon.svg" className="w-5 h-4 object-contain" />
                                                12
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <img src="/images/comment-icon.svg" className="w-5 h-4 object-contain" />
                                                12
                                            </span>
                                            <img src="/images/bookmark-icon.svg" className="w-5 h-4 object-contain ml-auto" />
                                            <img src="/images/share-icon.svg" className="w-5 h-4 object-contain" />
                                        </div>

                                    </div>
                                </div>
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
                                            <span className="flex items-center gap-2 ">
                                                <i style={{
                                                    mask: "url(/images/noti.svg) center / contain no-repeat",
                                                    WebkitMask: "url(/images/noti.svg) center / contain no-repeat"
                                                }} className={`w-5 h-4 bg-red-500 fill-current`}></i>
                                                12
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <img src="/images/repost-icon.svg" className="w-5 h-4 object-contain" />
                                                12
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <img src="/images/comment-icon.svg" className="w-5 h-4 object-contain" />
                                                12
                                            </span>
                                            <img src="/images/bookmark-icon.svg" className="w-5 h-4 object-contain ml-auto" />
                                            <img src="/images/share-icon.svg" className="w-5 h-4 object-contain" />
                                        </div>

                                    </div>
                                </div>
                                {posts &&
                                    posts.map(post => <PostItem post={post} key={v4()} />)
                                }
                            </div>
                        }
                        {
                            viewing == "media" && <div className="grid grid-cols-3 h-full max-h-[50vh] gap-3 overflow-y-scroll scrollbar-none py-6">
                                <img src="/images/media1.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media2.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media3.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media4.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media5.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media1.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media2.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media3.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media4.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                                <img src="/images/media5.png" className="w-full rounded-md h-full aspect-auto object-cover" />
                            </div>
                        }
                    </>
                    }

                    {edit && <div className="">
                        
                    </div>}
                </div>
            </main >
            <RightBar />
        </div >
    </>)
}