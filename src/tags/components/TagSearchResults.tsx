import { TagEntry } from "../data/db";
import styles from "./TagSearchResults.module.css";
import { GrFormCheckmark } from "react-icons/gr";
import { useState } from "react";

type ResultProps = {
  active: boolean;
  text: string;
  score: number;
  onClick: CallableFunction;
};

function Result(props: ResultProps) {
  let resultsListClasses = [styles.tagSearchResult];
  let resultCheckClasses = [styles.tagSearchResultCheck];

  if (props.active) {
    resultsListClasses.push(styles.tagSearchResult_selected);
    resultCheckClasses.push(styles.tagSearchResultCheck_selected);
  }

  const handleClick = () => {
    props.onClick();
  };

  return (
    <div className={resultsListClasses.join(" ")} onClick={handleClick}>
      <div className={resultCheckClasses.join(" ")}>
        <GrFormCheckmark />
      </div>
      <div className={styles.tagSearchResultText}>{props.text}</div>
      <div className={styles.tagSearchResultScore}>+{props.score}</div>
    </div>
  );
}

type SearchResultsProps = {
  results: TagEntry[];
};

export default function TagSearchResults(props: SearchResultsProps) {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    let index = selected.indexOf(id);
    if (index == -1) {
      setSelected((previous) => [...previous, id]);
      return;
    }

    let previous = [...selected];
    previous.splice(index, 1);
    setSelected(previous);
  };
  return (
    <div className={styles.tagSearchResultsContainer}>
      <div className={styles.tagSearchResultsList}>
        {props.results.map((result) => (
          <Result
            active={selected.includes(result.id)}
            text={result.name}
            score={result.score}
            onClick={() => toggleItem(result.id)}
          />
        ))}
      </div>
      <button className={styles.tagSearchSubmit} disabled={!selected.length}>Zapisz</button>
    </div>
  );
}
