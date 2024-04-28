import { IconType } from "react-icons";
import styles from "./Toolbar.module.css";

type ToolbarButtonProps = {
  tooltip: string;
  icon: IconType;
  selected: boolean;
};

export default function ToolbarButton(props: ToolbarButtonProps) {
  let classList = [styles.toolbarButton];
  if (props.selected) classList.push(styles.toolbarButton_selected);

  return (
    <div className={classList.join(" ")}>
      <props.icon size={"1.5rem"} />
    </div>
  );
}
