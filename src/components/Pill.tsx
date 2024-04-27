import styles from "./Pill.module.css";
import { MdClose } from "react-icons/md";

type PillProps = {
  text: string;
  onDelete?: CallableFunction;
};

export default function Pill(props: PillProps) {
  return (
    <div className={styles.pill}>
      <div>{props.text}</div>
      <div className={styles.pillClose}>
        <MdClose />
      </div>
    </div>
  );
}
