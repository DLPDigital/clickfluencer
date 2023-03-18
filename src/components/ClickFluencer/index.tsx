import React, { useEffect, useState } from "react";
import { Container, Title, Alert } from "./ClickFluencer.styles";
import { type GameState } from "@/types/gamestate";
import StyledButton from "../Button/StyledButton";
import handlePost from "@/utils/handlePost";
import handleClear from "@/utils/handleClear";

const ClickFluencer: React.FC = () => {
  const [posts, setPosts] = useState<number | undefined>(undefined);
  const [likes, setLikes] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [state, setState] = useState<GameState>({
    lastFollowerLikes: 0,
    lastFollowerCount: 0,
  });

  useEffect(() => {
    const postsFromStorage = JSON.parse(localStorage.getItem("posts") || "0");
    setPosts(postsFromStorage);
    const likesFromStorage = JSON.parse(localStorage.getItem("likes") || "0");
    setLikes(likesFromStorage)
    const followersFromStorage = JSON.parse(localStorage.getItem("followers") || "0");
    setFollowers(followersFromStorage)
  }, []);

  const handlePostClick = () => {
    console.log("click, posts = ", posts);
    handlePost({
      posts,
      setPosts,
      likes,
      setLikes,
      followers,
      setFollowers,
      state,
      setState,
    });
  };

  const handleClearClick = () => {
    handleClear({
      setPosts,
      setLikes,
      setFollowers,
      setState,
      state,
    });
  };

  return (
    <Container>
      <Title>Welcome to Click-Fluencer</Title>
      <StyledButton onClick={handlePostClick}>Post</StyledButton>
      <div>
        <p>Posts: {posts}</p>
        <p>Likes: {likes}</p>
        <p>Followers: {followers}</p>
        {followers > 0 && <p>Last follower at: {state.lastFollowerLikes}</p>}
        <StyledButton onClick={handleClearClick}>Reset</StyledButton>
      </div>
      {followers > 0 && (
        <Alert>
          Congratulations! You now have {followers} new{" "}
          {followers === 1 ? "follower" : "followers"}.
        </Alert>
      )}
    </Container>
  );
};

export default React.memo(ClickFluencer);
