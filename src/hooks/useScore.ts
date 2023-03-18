import { useState, useEffect } from "react";

export const useScore = () => {
  const [score, setScore] = useState<number>(0);
  const [posts, setPosts] = useState<number>(0);
  const [likes, setLikes] = useState<number>(0);
  const [followers, setFollowers] = useState<number>(0);
  const [state, setState] = useState({
    lastFollowerLikes: 0,
    lastFollowerCount: 0,
  });

  useEffect(() => {
    const postsFromStorage = JSON.parse(
      localStorage.getItem("posts") || "0"
    );
    const likesFromStorage = JSON.parse(
      localStorage.getItem("likes") || "0"
    );
    const followersFromStorage = JSON.parse(
      localStorage.getItem("followers") || "0"
    );
    const stateFromStorage = JSON.parse(
      localStorage.getItem("state") ||
        '{"lastFollowerLikes":0,"lastFollowerCount":0}'
    );
    const scoreFromStorage = JSON.parse(
      localStorage.getItem("score") || "0"
    );

    if (scoreFromStorage) {
      setScore(scoreFromStorage);
    }

    if (postsFromStorage) {
      setPosts(postsFromStorage);
    }

    if (likesFromStorage) {
      setLikes(likesFromStorage);
    }

    if (followersFromStorage) {
      setFollowers(followersFromStorage);
    }

    if (stateFromStorage) {
      setState(stateFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("followers", JSON.stringify(followers));
  }, [followers]);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return [score, setScore, posts, setPosts, likes, setLikes, followers, setFollowers, state, setState] as const;
};
