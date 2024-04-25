import { PropsWithChildren } from "react";
import styles from "./Card.module.css";

type CardProps = PropsWithChildren<{}>;

export default function ({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}
