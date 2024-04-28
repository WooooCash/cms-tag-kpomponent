import { PiInfoFill } from "react-icons/pi";
import styles from "./TagRatingInfo.module.css";

type TagRatingInfoProps = {
  tagCount: number;
  desiredCount: number;
};

export default function TagRatingInfo(props: TagRatingInfoProps) {
  const text = () => {
    if (props.tagCount >= props.desiredCount)
      return "Artykuł ma dobrą widoczność dzięki dodanym tagom";

    let remainingCount = props.desiredCount - props.tagCount;
    return `Zbyt mało tagów. Dodaj jeszcze ${remainingCount} aby poprawić widoczność artykułu`;
  };

  return (
    <div className={styles.tagRatingInfo}>
      <div className={styles.tagRatingInfoIcon}>
        <PiInfoFill />
      </div>
      {text()}
    </div>
  );
}
