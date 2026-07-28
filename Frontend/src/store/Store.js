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