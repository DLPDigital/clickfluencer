import { useState, useEffect } from "react"
import { Container, Title, Alert } from "./ClickFluencer.styles"
import { GameState } from "@/types/gamestate"
import StyledButton from "../Button/StyledButton"

const ClickFluencer = () => {
  const [score, setScore] = useState(0)
  const [posts, setPosts] = useState(0)
  const [likes, setLikes] = useState(0)
  const [followers, setFollowers] = useState(0)
  const [state, setState] = useState<GameState>({
    lastFollowerLikes: 0,
    lastFollowerCount: 0,
  })

  useEffect(() => {
    const scoreFromStorage = JSON.parse(localStorage.getItem("score") || "0")
    const stateFromStorage = JSON.parse(localStorage.getItem("state") || "{}")

    if (scoreFromStorage) {
      setScore(scoreFromStorage)
    }
    if (stateFromStorage) {
      setState(stateFromStorage)
    }
  }, [])

  const handlePost = () => {
    const newLikes = Math.floor(Math.random() * (10 - 5 + 1)) + 5
    setPosts(posts + 1)
    setLikes(likes + newLikes)
    setState({
      lastFollowerLikes: likes,
      lastFollowerCount: followers,
    })
    if (
      likes - state.lastFollowerLikes >= 10 &&
      likes - state.lastFollowerLikes <= 50
    ) {
      const newFollowers = Math.floor(Math.random() * (3 - 1 + 1)) + 1
      setFollowers(followers + newFollowers)
      setState({
        lastFollowerLikes: likes,
        lastFollowerCount: followers + newFollowers,
      })
    }
    localStorage.setItem("score", JSON.stringify(score))
    localStorage.setItem("state", JSON.stringify(state))
  }

  const handleClear = () => {
    setScore(0)
    setPosts(0)
    setLikes(0)
    setFollowers(0)
    setState({
      lastFollowerLikes: state.lastFollowerLikes,
      lastFollowerCount: state.lastFollowerCount,
    })
    localStorage.clear()
  }

  return (
    <Container>
      <Title>Welcome to Click-Fluencer</Title>
      <StyledButton onClick={handlePost}>Post</StyledButton>
      <div>
        <p>Posts: {posts}</p>
        <p>Likes: {likes}</p>
        <p>Followers: {followers}</p>
        <StyledButton onClick={handleClear}>Reset</StyledButton>
      </div>
      {followers > 0 && (
        <Alert>
          Congratulations! You now have {followers} new{" "}
          {followers === 1 ? "follower" : "followers"}.
        </Alert>
      )}
    </Container>
  )
}

export default ClickFluencer
