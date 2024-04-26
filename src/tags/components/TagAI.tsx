import { RiSparkling2Fill, RiSparkling2Line } from "react-icons/ri";
import { RiPriceTag3Line } from "react-icons/ri";
import styles from "./TagAI.module.css";
import { IconType } from "react-icons";

type AIItemProps = {
  text: string;
  icon: IconType;
};

const iconSize = "1.3rem"

function AIItem(props: AIItemProps) {
  return (
    <div className={styles.tagAiItem}>
      <props.icon size={iconSize} color={"#9764dc"} />
      {props.text}
    </div>
  );
}

export default function TagAI() {
  return (
    <div className={styles.tagAiContainer}>
      <div className={styles.tagAiHeading}>
        <RiSparkling2Fill size={iconSize} />
        CMS AI
      </div>
      <AIItem text="Analizuj tekst" icon={RiSparkling2Line} />
      <AIItem text="Najbardziej popularne tagi" icon={RiPriceTag3Line} />
    </div>
  );
}
