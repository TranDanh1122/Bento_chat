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
}
export {

}