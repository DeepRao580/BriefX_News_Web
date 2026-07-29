import { openDB } from "idb";

export const dbPromise = openDB("BriefXDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("news")) {
      db.createObjectStore("news", {
        keyPath: "id",
      });
    }
  },
});