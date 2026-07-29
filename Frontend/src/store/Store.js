import { create } from "zustand"
import { persist } from "zustand/middleware"
const Store=create(persist((set)=>({
    
    bookmarks:[],

    addBookmark:(newNews) =>set((state)=>({
        bookmarks:[...state.bookmarks,newNews]
    })),
    removeBookmark:(id)=>set((state)=>({
        bookmarks:state.bookmarks.filter((news)=>news.id!==id)
    })),

    comments: [],

    addComment: (newComment) =>
      set((state) => ({
        comments: [...state.comments, newComment],
      })),

    removeComment: (id) =>
      set((state) => ({
        comments: state.comments.filter((comment) => comment.id !== id),
      })),

    theme:"light",

    toggleTheme:()=>set((state)=>({
        theme:state.theme==="light"?"dark":"light"
    })),

    lang:"en",

    toggleLang:()=>set((state)=>({
        lang:state.lang==="en"?"hi":"en"
    }))
})))
export default Store