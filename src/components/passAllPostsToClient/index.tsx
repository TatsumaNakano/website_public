"use client"
import { useRecoilState } from "recoil";
import { allPosts } from "@/states";
function PassAllPostsToClient({ allPostsWP }: { allPostsWP: any }) {
    const [ap, setAllPostToGlobal] = useRecoilState(allPosts);
    setAllPostToGlobal(allPostsWP);
    return null
}

export default PassAllPostsToClient;