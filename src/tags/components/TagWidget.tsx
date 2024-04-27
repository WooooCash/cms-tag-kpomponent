import Card from "../../components/Card";
import WidgetTitleBar from "../../components/WidgetTitleBar";

import styles from "./TagWidget.module.css";
import Search from "../../components/Search";
import Pill from "../../components/Pill";
import Rating from "../../components/Rating";
import TagAI from "./TagAI";
import TagSearchResults from "./TagSearchResults";
import { useEffect, useState } from "react";
import searchDB, { TagEntry } from "../data/db";

export default function TagWidget() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TagEntry[]>([]);

  useEffect(() => {
    if (!query) return;
    setSearchResults(searchDB(query));
  }, [query]);

  const toggle = query.length > 0;

  return (
    <Card>
      <div className={styles.tagWidget}>
        <WidgetTitleBar title="Tagi" />
        <Search placeholder="Wyszukaj grupę lub tag" onChange={setQuery} />
        <hr />
        {!toggle && (
          <>
            <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
              <Pill text="Fix const height - some reasonable solution" />
              <Pill text="Send back results intersect of selected and resultlist" />
            </div>
            <hr />
            <TagAI />
            <hr />
            <Rating score={100} maxScore={100} />
          </>
        )}
        {!!toggle && <TagSearchResults results={searchResults}/>}
      </div>
    </Card>
  );
}
