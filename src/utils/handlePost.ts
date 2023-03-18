import { type GameState } from "@/types/gamestate";
import generatePost from "./postGenerator";

interface HandlePostProps {
  posts: number | undefined;
  setPosts: (posts: number) => void;
  likes: number;
  setLikes: (likes: number) => void;
  followers: number;
  setFollowers: (followers: number) => void;
  state: GameState;
  setState: (state: GameState) => void;
  contentFeed: string[];
  setContentFeed: (contentFeed: string[]) => void;
}

const handlePost = ({
  posts,
  setPosts,
  likes,
  setLikes,
  followers,
  setFollowers,
  state,
  setState,
  contentFeed,
  setContentFeed,
}: HandlePostProps) => {
  console.log("state = ", state);
  const newPosts = posts ? posts + 1 : 1;
  const newLikes = Math.floor(Math.random() * 18) + 3;
  const totalLikes = likes + newLikes
  const newFollowers = Math.floor(newLikes / 10);
  const totalFollowers = followers + newFollowers
  const newState = {
    lastFollowerCount: totalFollowers,
    lastFollowerLikes: totalLikes - newLikes,
  };

  const updatedContentFeed = [generatePost(), ...contentFeed]
  console.log('updatedContentFeed = ', updatedContentFeed)

  setPosts(newPosts);
  setLikes(totalLikes);
  setFollowers(totalFollowers);
  setState(newState);
  setContentFeed(updatedContentFeed)

  localStorage.setItem("posts", JSON.stringify(newPosts));
  localStorage.setItem("likes", JSON.stringify(totalLikes));
  localStorage.setItem("followers", JSON.stringify(totalFollowers));
  localStorage.setItem("state", JSON.stringify(newState));
  localStorage.setItem("contentFeed", JSON.stringify(updatedContentFeed))
};

export default handlePost;
