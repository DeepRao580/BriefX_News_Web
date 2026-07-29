import { newsDB } from "../utilities/indexDB";

// Save news
export const saveOfflineNews = async (category, news) => {
  const db = await newsDB;

  const store = db.transaction(category, "readwrite");

  await store.objectStore(category).clear();

  news.forEach((article) => {
    store.objectStore(category).put(article);
  });

  await store.done;
};

// Get all news
export const getOfflineNews = async (category) => {
  const db = await newsDB;

  return await db.getAll(category);
};

// Get one article
export const getOfflineArticle = async (category, id) => {
  const db = await newsDB;

  return await db.get(category, id);
};