import styles from "./Rating.module.css";

type RatingProps = {
  score: number;
  maxScore: number;
};

type RatingStage = {
  label: string;
  color: string;
  description?: string;
};
const ratingStages: RatingStage[] = [
  { label: "Żenada", color: "#e51f1f" },
  { label: "Źle", color: "#e51f1f" },
  { label: "Słabo", color: "#f2a134" },
  { label: "Ok", color: "#f7e379" },
  { label: "Dobrze", color: "#abe16c" },
  { label: "Super", color: "#5f8726" },
];

function RatingItem({ color }: { color: string }) {
  return (
    <div className={styles.ratingItem} style={{ backgroundColor: color }}></div>
  );
}

export default function Rating(props: RatingProps) {
  const filledCount = Math.floor(
    (props.score * (ratingStages.length - 1)) / props.maxScore
  );
  const unfilledCount = ratingStages.length - filledCount - 1;
  const curStage = ratingStages[filledCount];

  return (
    <div className={styles.ratingContainer}>
      <div style={{ color: curStage.color, fontWeight: "700" }}>
        {curStage.label}
      </div>
      <div className={styles.ratingItemsContainer}>
        {[...Array(filledCount)].map((_, i) => (
          <RatingItem key={i} color={curStage.color} />
        ))}
        {[...Array(unfilledCount)].map((_, i) => (
          <RatingItem key={i} color="gray" />
        ))}
      </div>
    </div>
  );
}
