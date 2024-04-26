import Card from "../../components/Card";
import WidgetTitleBar from "../../components/WidgetTitleBar";

import styles from "./TagWidget.module.css";
import Search from "../../components/Search";
import Pill from "../../components/Pill";
import Rating from "../../components/Rating";

export default function TagWidget() {
  return (
    <Card>
      <div className={styles.tagWidget}>
        <WidgetTitleBar title="Tagi" />
        <Search placeholder="Wyszukaj grupę lub tag" />
        <hr />
        <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
          <Pill text="Test Długi" />
          <Pill text="Test Jeszcze dłuższy" />
          <Pill text="Test" />
          <Pill text="Test Test Test" />
          <Pill text="Test Halo" />
        </div>
        <hr />
        <div>Recommended</div>
        <hr />
        <Rating score={80} maxScore={100} />
      </div>
    </Card>
  );
}
