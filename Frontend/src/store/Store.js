import { create } from "zustand/react"
const Store=create((set)=>({
    
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
    }))
}))
export default Store