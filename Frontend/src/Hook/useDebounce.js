import React from "react";
import { useState,useEffect } from "react";
const useDebounce=(term,delay)=>{
    const [debounceTerm,setDebounceTerm]=useState(term)
    useEffect(()=>{
        const timerId=setTimeout(()=>{
            setDebounceTerm(term)
        },delay)
        return ()=>clearTimeout(timerId)
    },[term,delay])
    return debounceTerm
}
export default useDebounce