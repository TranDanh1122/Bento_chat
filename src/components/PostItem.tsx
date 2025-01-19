import React from "react";
const PostItem = React.memo(({ post }: { post: Post }): React.JSX.Element => {
    return (
        <div className="bg-bsColor/10 p-3 rounded-xl flex gap-4 items-start justify-start">
            <img src="/images/avatar-2.png" className="w-11 h-11 object-cover" />
            <div className="flex flex-wrap items-center gap-2 gap-y-4">
                <h2 className="base_14_m text-bsColor/95 text-opacity-80">{`${post.author?.firstName} ${post.author?.lastName}`}</h2>
                <span className="caption_r text-bsColor/50">{post.createdAt}</span>
                <p className="text-bsColor/70 text-opacity-80 body_14_r" dangerouslySetInnerHTML={{ __html: post.content }}>

                    {/* <img src="/images/photo.png" className="w-auto h-auto aspect-auto max-w-full max-h-[300px] rounded-3xl" /> */}
                </p>
                <div className="flex items-center justify-start gap-4 w-full caption_sm text-bsColor/50">
                    <span className="flex items-center gap-2 "><img src="/images/noti.svg" className="w-5 h-4 object-contain" /> {post.likedCount}</span>
                    <span className="flex items-center gap-2"><img src="/images/repost-icon.svg" className="w-5 h-4 object-contain" />  {12}</span>
                    <span className="flex items-center gap-2"><img src="/images/comment-icon.svg" className="w-5 h-4 object-contain" />  {post.commentCount}</span>
                    <img src="/images/bookmark-icon.svg" className="w-5 h-4 object-contain ml-auto" />
                    <img src="/images/share-icon.svg" className="w-5 h-4 object-contain" />
                </div>

            </div>
        </div>
    )
})
PostItem.displayName = "PostItem"
export default PostItem