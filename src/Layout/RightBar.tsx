import React from "react";
import User from "../components/User";
import ButtonGroup from "../components/ButtonGroup";
import { useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store";
import { useDispatch } from "react-redux";
import { listTopic } from "../redux/homeSlicer";

const RightBar = React.memo((): React.JSX.Element => {
    const { topics } = useSelector((state: AppState) => state.home)
    const [viewing, setViewing] = React.useState<string>("follow")
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        const fetch = async () => {
            try {
                if (viewing == "topics")
                    await dispatch(listTopic({ page: 1, limit: 5 }))
            } catch (e) {
                console.error(e);
            }
        }
        fetch()
    }, [viewing])
    const onClick = (type: string) => {
        setViewing(type)
    }
    return (
        <aside className=" w-3/12 h-full min-h-full bg-bsColor/5 p-3 flex flex-col gap-3 backdrop-blur-xl">
            <ButtonGroup buttons={
                [
                    { title: "Who To Follow", handleClick: () => onClick("follow"), default: true },
                    { title: "Trending Topics", handleClick: () => onClick("topics") }
                ]
            } />

            {viewing == "follow" &&
                <div className="flex flex-col gap-2">
                    <div className="bg-bsColor/10 rounded-xl p-3">
                        <User user={{} as User}>
                            <img src="/images/add.svg" alt="" className="w-10 h-10 object-cover ml-auto cursor-pointer" />
                        </User>
                        <span className="body_14_r text-opacity-80 text-bsColor/50 block text-center mt-3">I design digital products and ventures.</span>
                    </div>
                    <div className="bg-bsColor/10 rounded-xl p-3">
                        <User user={{} as User}>
                            <img src="/images/check.svg" alt="" className="w-10 h-10 object-cover ml-auto cursor-pointer" />
                        </User>
                        <span className="body_14_r text-opacity-80 text-bsColor/50 block text-center mt-3">I design digital products and ventures.</span>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <img src="/images/avt_group.png" alt="" className="w-28 h-8 object-cover relative z-0" />
                        <span className="base_14_sm text-bsColor/70 translate-x-[-10%] bg-black/70 rounded-3xl relative z-10 py-[6px] px-3">1,234+</span>
                    </div>
                </div>}
            {viewing == "topics" &&
                <div className="flex flex-col gap-2">
                    <div className="flex item-centers gap-4 bg-bsColor/10 rounded-xl">
                        <img src="/images/topic.png" alt="" className="max-w-28  object-cover" />
                        <div className="flex flex-wrap gap-y-1 gap-2 p-4">
                            <h2 className="line-clamp-2 base_14_sm text-bsColor/95 text-opacity-80">Apple Releases iOS 17.6.1 with Advanced Data Protection Fix</h2>
                            <img src="/images/avt_group.png" alt="" className="w-14 h-5 object-cover" />
                            <span className="caption_r text-bsColor/50 text-opacity-45">4 hours ago</span>
                        </div>
                    </div>
                    {topics?.map(topic => <div className="flex item-centers gap-4 bg-bsColor/10 rounded-xl">
                        <img src="/images/topic.png" alt="" className="max-w-28  object-cover" />
                        <div className="flex flex-wrap gap-y-1 gap-2 p-4">
                            <h2 className="line-clamp-2 base_14_sm text-bsColor/95 text-opacity-80">Apple Releases iOS 17.6.1 with Advanced Data Protection Fix</h2>
                            <img src="/images/avt_group.png" alt="" className="w-14 h-5 object-cover" />
                            <span className="caption_r text-bsColor/50 text-opacity-45">4 hours ago</span>
                        </div>
                    </div>)}
                    <div className="flex items-center justify-center relative">
                        <img src="/images/avt_group.png" alt="" className="w-28 h-8 object-cover relative z-0" />
                        <span className="base_14_sm text-bsColor/70 translate-x-[-10%] bg-black/70 rounded-3xl relative z-10 py-[6px] px-3">1,234+</span>
                    </div>
                </div>
            }


        </aside >
    )
})
RightBar.displayName = "RightBar"
export default RightBar