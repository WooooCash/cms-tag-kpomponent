import { default as db } from "./db.json";

export type TagEntry = {
  name: string;
  score: number;
};

export default function searchDB(query: string) {
  let matchingResults = db.filter((el) => {
    for (let subTag of el.tags) {
      if (subTag.startsWith(query)) return true;
    }
    return false;
  });

  matchingResults.sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  });

  return matchingResults.map((el) => {
    return { name: el.name, score: el.score };
  });
}
