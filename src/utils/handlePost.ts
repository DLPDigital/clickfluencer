import { type GameState } from "@/types/gamestate";

interface HandlePostProps {
  posts: number | undefined;
  setPosts: (posts: number) => void;
  likes: number;
  setLikes: (likes: number) => void;
  followers: number;
  setFollowers: (followers: number) => void;
  state: GameState;
  setState: (state: GameState) => void;
  score: number;
  setScore: (score: number) => void;
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
  score,
  setScore,
}: HandlePostProps) => {
  console.log("state = ", state);
  const postsFromStorage = JSON.parse(localStorage.getItem("posts") || "0")
  const initialPosts = postsFromStorage || posts
  console.log('postsFromStorage = ', postsFromStorage)
  console.log('initialPosts = ', initialPosts)
  const newPosts = posts ? posts + 1 : 1
  const newLikes = likes + followers;
  const newFollowers = Math.floor(newLikes / 10);
  const newState = {
    lastFollowerCount: followers,
    lastFollowerLikes: newLikes - likes,
  };
  const newScore = score + newFollowers;

  setPosts(newPosts);
  setLikes(newLikes);
  setFollowers(newFollowers);
  setState(newState);
  setScore(newScore);

  localStorage.setItem("posts", JSON.stringify(newPosts));
  localStorage.setItem("likes", JSON.stringify(newLikes));
  localStorage.setItem("followers", JSON.stringify(newFollowers));
  localStorage.setItem("state", JSON.stringify(newState));
  localStorage.setItem("score", JSON.stringify(newScore));
};

export default handlePost;
