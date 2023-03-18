import React, { useEffect, useState } from "react";
import { Container, Title, Alert } from "./ClickFluencer.styles";
import { type GameState } from "@/types/gamestate";
import handlePost from "@/utils/handlePost";
import handleClear from "@/utils/handleClear";
import { TabbedContent } from "../TabbedContent";
import Feed from "../Feed";

const ClickFluencer: React.FC = () => {
  const [posts, setPosts] = useState<number | undefined>(undefined);
  const [likes, setLikes] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [state, setState] = useState<GameState>({
    lastFollowerLikes: 0,
    lastFollowerCount: 0,
  });
  const [contentFeed, setContentFeed] = useState<string[]>([""])
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const postsFromStorage = JSON.parse(localStorage.getItem("posts") || "0");
    setPosts(postsFromStorage);
    const likesFromStorage = JSON.parse(localStorage.getItem("likes") || "0");
    setLikes(likesFromStorage)
    const followersFromStorage = JSON.parse(localStorage.getItem("followers") || "0");
    setFollowers(followersFromStorage)
    const contentFeedFromStorage = JSON.parse(localStorage.getItem("contentFeed") ?? "[]");
    if (contentFeedFromStorage !== null) {
      setContentFeed(contentFeedFromStorage)
    }
  }, []);

  const handlePostClick = () => {
    console.log("click, posts = ", posts);
    console.log("contentFeed = ", contentFeed);
    handlePost({
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
    });
  };

  const timeDelay = 500

  const handlePostClickDelay = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          handlePostClick();
          return 0;
        }
        return prevProgress + 1;
      });
    }, (timeDelay / 100));
  };
  

  const handleClearClick = () => {
    handleClear({
      setPosts,
      setLikes,
      setFollowers,
      setState,
      setContentFeed,
      state,
    });
  };

  return (
    <Container>
      <Title>Welcome to Click-Fluencer</Title>
      <h1>asd</h1>
      <TabbedContent
        handlePostClickDelay={handlePostClickDelay}
        posts={posts}
        likes={likes}
        followers={followers}
        state={state}
        handleClearClick={handleClearClick}
        progress={progress}
      />
      <Feed posts={contentFeed} />
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
