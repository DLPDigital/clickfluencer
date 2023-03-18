import { GameState } from "@/types/gamestate";

type HandlePostProps = {
  posts: number;
  setPosts: (posts: number) => void;
  likes: number;
  setLikes: (likes: number) => void;
  followers: number;
  setFollowers: (followers: number) => void;
  state: GameState;
  setState: (state: GameState) => void;
  score: number;
  setScore: (score: number) => void;
};

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
  const newLikes = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const followerQuality = Math.floor(Math.random() * 10) + 1;

  setPosts(posts + 1);
  setLikes(likes + newLikes);
  setState({
    lastFollowerLikes: likes,
    lastFollowerCount: followers,
  });

  if (likes - state.lastFollowerLikes >= 10) {
    let newFollowers = 0;

    if (followerQuality <= 3) {
      newFollowers = Math.floor(Math.random() * 1) + 1;
    } else if (followerQuality <= 7) {
      newFollowers = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    } else {
      newFollowers = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    }

    setFollowers(followers + newFollowers);
    setState({
      lastFollowerLikes: likes,
      lastFollowerCount: followers + newFollowers,
    });
  }

  setScore(score + newLikes);
  localStorage.setItem("posts", (posts + 1).toString());
  localStorage.setItem("likes", (likes + newLikes).toString());
  localStorage.setItem("followers", followers.toString());
  localStorage.setItem(
    "state",
    JSON.stringify({
      lastFollowerLikes: likes,
      lastFollowerCount: followers,
    })
  );
  localStorage.setItem("score", (score + newLikes).toString());
};

export default handlePost;
