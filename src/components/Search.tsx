import { CiSearch } from "react-icons/ci";

import styles from "./Search.module.css";
import { ChangeEvent } from "react";
import { IoIosCloseCircle } from "react-icons/io";

type SearchProps = {
  placeholder: string;
  value: string;
  onChange: CallableFunction;
};

export default function Search(props: SearchProps) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e.target.value);
  };

  const handleCancel = () => {
    if (props.onChange) props.onChange("");
  };
  console.log("pv", props.value, !!props.value);

  return (
    <div className={styles.searchContainer}>
      <CiSearch size={"1.4rem"} />
      <input
        className={styles.searchInput}
        placeholder={props.placeholder}
        onChange={handleOnChange}
        value={props.value}
      />
      {!!props.value && (
        <div className={styles.searchClose} onClick={handleCancel}>
          <IoIosCloseCircle />
        </div>
      )}
    </div>
  );
}
