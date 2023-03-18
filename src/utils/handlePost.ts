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
  // score: number;
  // setScore: (score: number) => void;
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
  // score,
  // setScore,
}: HandlePostProps) => {
  console.log('likes = ', likes)
  console.log('followers = ', followers)
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
  // const newScore = score + newFollowers;

  setPosts(newPosts);
  setLikes(totalLikes);
  setFollowers(totalFollowers);
  setState(newState);
  // setScore(newScore);

  console.log("newPosts = ", newPosts);
  console.log("newLikes = ", newLikes);
  console.log("newFollowers = ", newFollowers);
  console.log("newState = ", newState);
  // console.log("newScore = ", newScore);

  localStorage.setItem("posts", JSON.stringify(newPosts));
  localStorage.setItem("likes", JSON.stringify(totalLikes));
  localStorage.setItem("followers", JSON.stringify(totalFollowers));
  localStorage.setItem("state", JSON.stringify(newState));
  // localStorage.setItem("score", JSON.stringify(newScore));
};

export default handlePost;
