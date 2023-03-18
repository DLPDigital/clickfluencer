import { type GameState } from "@/types/gamestate";

interface HandleClearProps {
  setPosts: (posts: number) => void;
  setLikes: (likes: number) => void;
  setFollowers: (followers: number) => void;
  setState: (state: GameState) => void;
  state: GameState;
}

const handleClear = ({
  setPosts,
  setLikes,
  setFollowers,
  setState,
  state,
}: HandleClearProps) => {
  setPosts(0);
  setLikes(0);
  setFollowers(0);
  setState({
    lastFollowerLikes: state.lastFollowerLikes,
    lastFollowerCount: state.lastFollowerCount,
  });
  localStorage.removeItem("posts");
  localStorage.removeItem("likes");
  localStorage.removeItem("followers");
  localStorage.removeItem("state");
  localStorage.removeItem("score");
  localStorage.clear();
};

export default handleClear;
