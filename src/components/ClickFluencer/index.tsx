import { useState, useEffect } from "react";
import { Container, Title, Alert } from "./ClickFluencer.styles";
import { GameState } from "@/types/gamestate";
import StyledButton from "../Button/StyledButton";
import { useScore } from "@/hooks/useScore";
import handlePost from "@/utils/handlePost";
import handleClear from "@/utils/handleClear";

const ClickFluencer = () => {
  const [score, setScore] = useScore();
  const [posts, setPosts] = useState(0);
  const [likes, setLikes] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [state, setState] = useState<GameState>({
    lastFollowerLikes: 0,
    lastFollowerCount: 0,
  });

  const handlePostClick = () => {
    handlePost({
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
    });
  };

  const handleClearClick = () => {
    handleClear({
      setScore,
      setPosts,
      setLikes,
      setFollowers,
      setState,
      state
    })
  }

  return (
    <Container>
      <Title>Welcome to Click-Fluencer</Title>
      <StyledButton onClick={handlePostClick}>Post</StyledButton>
      <div>
        <p>Posts: {posts}</p>
        <p>Likes: {likes}</p>
        <p>Followers: {followers}</p>
        {followers > 0 && (
          <p>Last follower at: {state.lastFollowerLikes}</p>
        )}
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

export default ClickFluencer;
