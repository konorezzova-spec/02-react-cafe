import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import { type Votes, type VoteType } from "../../types/votes.ts";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";

function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const handleVotes = (type: VoteType) => {
    switch (type) {
      case "good":
        setVotes({ ...votes, good: votes.good + 1 });
        break;
      case "neutral":
        setVotes({ ...votes, neutral: votes.neutral + 1 });
        break;
      case "bad":
        setVotes({ ...votes, bad: votes.bad + 1 });
        break;
    }
  };
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  const totalVotes: number = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVotes}
          onReset={resetVotes}
          canReset={totalVotes > 0 ? true : false}
        />
        {totalVotes > 0 ? (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}

export default App;
