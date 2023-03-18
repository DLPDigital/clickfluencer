import { useState, useEffect } from 'react'

const useScore = (): [number, (newScore: number) => void] => {
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scoreFromStorage = JSON.parse(localStorage.getItem('score') || '0')
      setScore(scoreFromStorage)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('score', JSON.stringify(score))
    }
  }, [score])

  const handleScoreUpdate = (newScore: number) => {
    setScore(newScore)
  }

  return [score, handleScoreUpdate]
}

export { useScore }
