import { openDB } from "idb";

export const newsDB = openDB("BriefXDB", 2, {
  upgrade(db) {
    const categories = ["home","sports","health","business","technology","science","education","entertainment"];

    categories.forEach((category) => {
      if (!db.objectStoreNames.contains(category)) {
        db.createObjectStore(category, {
          keyPath: "id",
        });
      }
    });
  },
});