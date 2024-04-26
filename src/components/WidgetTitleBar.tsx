import { GrClose } from "react-icons/gr";
import styles from "./WidgetTitleBar.module.css";

type WidgetTitleProps = {
  title: string;
};

export default function WidgetTitleBar({ title }: WidgetTitleProps) {
  return (
    <div className={styles.titleBar}>
      <div className={styles.title}>{title}</div>
      <div className={styles.exitButton}>
        <GrClose />
      </div>
    </div>
  );
}
