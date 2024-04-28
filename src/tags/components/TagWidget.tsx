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
import TagRatingInfo from "./TagRatingInfo";

export default function TagWidget() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TagEntry[]>([]);
  const [tags, setTags] = useState<TagEntry[]>([]);

  const satisfactoryTagCount = 5;
  const isSearching = query.length > 0;

  useEffect(() => {
    if (!query) return;
    setSearchResults(searchDB(query));
  }, [query]);

  const handleSubmit = (newTags: TagEntry[]) => {
    let previous = [...tags];
    let previousIds = previous.map((el) => el.id);
    for (let tag of newTags)
      if (!previousIds.includes(tag.id)) previous.push(tag);
    setTags(previous);
    setQuery("");
  };

  const handlePillDelete = (id: number) => {
    setTags((previous) => [...previous.filter((el) => el.id != id)]);
  };

  return (
    <Card>
      <div className={styles.tagWidget}>
        <WidgetTitleBar title="Tagi" />
        <Search
          placeholder="Wyszukaj grupę lub tag"
          onChange={setQuery}
          value={query}
        />
        <hr />
        {!isSearching && (
          <>
            <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
              {!tags.length && (
                <div className={styles.tagsMissing}>Brak tagów</div>
              )}
              {tags.map((tag) => (
                <Pill
                  key={tag.id}
                  id={tag.id}
                  text={tag.name}
                  onDelete={handlePillDelete}
                />
              ))}
            </div>
            <hr />
            <TagAI />
            <hr />
            <Rating score={tags.length} maxScore={satisfactoryTagCount} />
            <TagRatingInfo
              tagCount={tags.length}
              desiredCount={satisfactoryTagCount}
            />
          </>
        )}
        {!!isSearching && (
          <TagSearchResults results={searchResults} onSubmit={handleSubmit} />
        )}
      </div>
    </Card>
  );
}
