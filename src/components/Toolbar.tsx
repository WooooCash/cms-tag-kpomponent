import Card from "./Card";
import ToolbarButton from "./ToolbarButton";

import { IconType } from "react-icons";
import { GoGear } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BiComment } from "react-icons/bi";
import { PiTag } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";

import styles from "./Toolbar.module.css";

type ToolbarItem = {
  tooltip: string;
  icon: IconType;
};

const navItems: ToolbarItem[] = [
  { tooltip: "Informacje | ctrl-i", icon: IoMdInformationCircleOutline },
  { tooltip: "Notatki | ctrl-n", icon: BiComment },
  { tooltip: "Ustawienia | ctrl-u", icon: GoGear },
  { tooltip: "Dodawanie tagów | ctrl-t", icon: PiTag },
  { tooltip: "Profil autora | ctrl-l", icon: BsPersonCheck },
];

export default function Toolbar() {
  return (
    <Card>
      <div className={styles.toolbar}>
        {navItems.map((item, i) => (
          <ToolbarButton key={i} tooltip={item.tooltip} icon={item.icon} />
        ))}
      </div>
    </Card>
  );
}
