import { CiSearch } from "react-icons/ci";

import styles from "./Search.module.css";

type SearchProps = {
  placeholder: string;
}

export default function Search(props: SearchProps) {
  return (
    <div className={styles.searchContainer}>
      <CiSearch size={"1.4rem"} />
      <input className={styles.searchInput} placeholder={props.placeholder}/>
    </div>
  );
}
