import { CiSearch } from "react-icons/ci";

import styles from "./Search.module.css";
// import searchDB from "../tags/data/db";
import { ChangeEvent } from "react";

type SearchProps = {
  placeholder: string;
  onChange?: CallableFunction;
};

export default function Search(props: SearchProps) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <CiSearch size={"1.4rem"} />
      <input
        className={styles.searchInput}
        placeholder={props.placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
