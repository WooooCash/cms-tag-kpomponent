import styles from "./Pill.module.css";
import { MdClose } from "react-icons/md";

type PillProps = {
  id: number;
  text: string;
  onDelete: CallableFunction;
};

export default function Pill(props: PillProps) {

  const handleDelete = () => {
    props.onDelete(props.id);
  }

  return (
    <div className={styles.pill}>
      <div>{props.text}</div>
      <div className={styles.pillClose} onClick={handleDelete}>
        <MdClose />
      </div>
    </div>
  );
}
