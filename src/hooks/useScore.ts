import { useState, useEffect } from "react";

export const useScore = () => {
  const [score, setScore] = useState<number>(() => {
    const scoreFromStorage = localStorage.getItem("score");
    return scoreFromStorage ? parseInt(scoreFromStorage, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return [score, setScore] as const;
};
