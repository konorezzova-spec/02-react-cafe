import css from "./VoteOptions.module.css";
import { type VoteType } from "../../types/votes.ts";

interface VoteOptionsProps {
  onVote: (event: React.MouseEvent<HTMLButtonElement>, type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={e => onVote(e, "good")}>
        Good
      </button>
      <button className={css.button} onClick={e => onVote(e, "neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={e => onVote(e, "bad")}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
