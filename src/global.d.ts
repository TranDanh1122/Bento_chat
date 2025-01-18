declare global {
    interface User {
        id: number,
        avatar: string,
        cover: string,
        lastName: string,
        firstName: string,
        username: string,
        password: string,
        bio: string,
        websiteUrl: string,
        salt: string,
        role: string,
        status: string,
        websiteUrl: string,
        followerCount: number,
        postCount: number,
        role: string,
        status: string,
        createdAt: string,
        updatedAt: string,
        [key: string]: string | number
    }
    interface Topic {
        id: string,
        name: string,
        postCount: number,
        color: string,
        createdAt: string,
        updatedAt: string,
    }
    interface Post {
        id: string,
        content: string,
        image: string,
        authorId: string,
        topicId: string,
        isFeatured: boolean,
        commentCount: number,
        likedCount: number,
        type: string,
        createdAt: string,
        updatedAt: string,
        topic?: Topic;
        author?: User;
        hasLiked?: boolean;
        hasSaved?: boolean;
    }
    interface Filter {
        str?: string,
        userId?: string,
        topicId?: string,
        isFeatured?: boolean,
        type?: string,
        page: number,
        limit: number,
        sort?: string,
        order?: string,
    }
}
export {

}