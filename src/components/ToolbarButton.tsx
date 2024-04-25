import { IconType } from "react-icons";
import styles from "./Toolbar.module.css"

type ToolbarButtonProps = {
  tooltip: string;
  icon: IconType;
};

export default function ToolbarButton(props: ToolbarButtonProps) {
  return (
    <div className={styles.toolbarButton}>
      <props.icon size={20}/>
    </div>
  );
}
