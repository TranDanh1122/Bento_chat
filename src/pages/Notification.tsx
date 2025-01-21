import React from "react";
import Layout from "../Layout/Layout";
import ButtonGroup from "../components/ButtonGroup";
import User from "../components/User";
import clsx from "clsx";
export default function Notification(): React.JSX.Element {
    return (
        <Layout>
            <div className="flex items-center  justify-between mb-4">
                <h1 className="title text-bsColor/95">Notifications</h1>
                <div className="w-11 h-11 flex justify-center items-center bg-[#383838] rounded-full cursor-pointer">
                    <img src="/images/setting.svg" className="w-6 h-6 object-cover" />
                </div>
            </div>
            <ButtonGroup buttons={[
                { title: "All", handleClick: () => { }, default: true },
                { title: "Liked", handleClick: () => { } },
                { title: "Replies", handleClick: () => { } },
                { title: "Follows", handleClick: () => { } }
            ]}></ButtonGroup>
            <div className="flex flex-col gap-2 py-4 mt-2 overflow-y-scroll scrollbar-none max-h-[calc(100vh-100px)]">
                <Noti title="Kohaku, Moyo Shiro, Dash and 2 others" type="follow" desc="follow you" />
                <Noti title="Kohaku liked your post" desc="SimpleList link.com/media.png" type="liked" />
                <Noti title="Kohaku reposted your post" type="repost" desc="SimpleList link.com/media.png" />
                <Noti title="Kohaku commented on your post" type="comment" desc="Always amazed with how you present your work. Love it so much" />
                <Noti title="Kohaku, Moyo Shiro, Dash and 2 others" type="follow" desc="follow you" />
                <Noti title="Kohaku liked your post" desc="SimpleList link.com/media.png" type="liked" />
                <Noti title="Kohaku reposted your post" type="repost" desc="SimpleList link.com/media.png" />
                <Noti title="Kohaku commented on your post" type="comment" desc="Always amazed with how you present your work. Love it so much" />
                <Noti title="Kohaku, Moyo Shiro, Dash and 2 others" type="follow" desc="follow you" />
                <Noti title="Kohaku liked your post" desc="SimpleList link.com/media.png" type="liked" />
                <Noti title="Kohaku reposted your post" type="repost" desc="SimpleList link.com/media.png" />
                <Noti title="Kohaku commented on your post" type="comment" desc="Always amazed with how you present your work. Love it so much" />
                <Noti title="Kohaku, Moyo Shiro, Dash and 2 others" type="follow" desc="follow you" />
                <Noti title="Kohaku liked your post" desc="SimpleList link.com/media.png" type="liked" />
                <Noti title="Kohaku reposted your post" type="repost" desc="SimpleList link.com/media.png" />
                <Noti title="Kohaku commented on your post" type="comment" desc="Always amazed with how you present your work. Love it so much" />
                <Noti title="Kohaku, Moyo Shiro, Dash and 2 others" type="follow" desc="follow you" />
                <Noti title="Kohaku liked your post" desc="SimpleList link.com/media.png" type="liked" />
                <Noti title="Kohaku reposted your post" type="repost" desc="SimpleList link.com/media.png" />
                <Noti title="Kohaku commented on your post" type="comment" desc="Always amazed with how you present your work. Love it so much" />
                <Noti title="Kohaku, Moyo Shiro, Dash and 2 others" type="follow" desc="follow you" />
                <Noti title="Kohaku liked your post" desc="SimpleList link.com/media.png" type="liked" />
                <Noti title="Kohaku reposted your post" type="repost" desc="SimpleList link.com/media.png" />
                <Noti title="Kohaku commented on your post" type="comment" desc="Always amazed with how you present your work. Love it so much" />
            </div>
        </Layout >
    )
}
export function Noti({ title, desc, type }: { title: string, desc: string, type: string }): React.JSX.Element {
    const data = {} as User
    const ref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        if (ref.current) {
            ref.current.querySelector("img")?.classList.remove("w-8", "h-8")
            ref.current.querySelector("img")?.classList.add("w-11", "h-11")
        }
    }, [])
    // const constent = {
    //     follow: "+",
    //     liked: "",
    //     repost: "repost your post",
    //     comment: "comment on your post"
    // }
    return (<>
        <div ref={ref} className="bg-bsColor/5 p-3 rounded-2xl" >
            <User user={{ ...data, firstName: title, cover: desc }} isHideActive={true} >
                <span className={clsx("w-5 h-5 rounded-full top-10 left-6 absolute z-20 flex items-center justify-center", {
                    "bg-purple-500": type == "follow",
                    "bg-red-500": type == "liked",
                    "bg-green-500": type == "repost",
                    "bg-blue-500": type == "comment",
                })}>
                    +
                </span>
            </User>
            <span className="caption_r text-bsColor/50 text-opacity-50 ml-16 mt-3">3h ago</span>
        </div>


    </>)
}