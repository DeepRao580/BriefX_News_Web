import React from "react"
import {Routes,Route} from "react-router-dom"
import Layout from './layout/Layout'
import Home from "./pages/Home"
import SearchNews from "./pages/SearchNews"
import NewsDetail from "./pages/NewsDetail"
import TechnologyNews from "./pages/TechnologyNews"
import EducationNews from "./pages/EducationNews"
import BusinessNews from "./pages/BusinessNews"
import SportsNews from "./pages/SportsNews"
import HealthNews from "./pages/HealthNews"
import ScienceNews from "./pages/ScienceNews"
import EntertainmentNews from "./pages/EntertainmentNews"
import Bookmark from "./pages/Bookmark"
import Store from "./store/Store"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App(){
    const { theme }=Store()
    return(
        <div style={{background:theme==="light"?"white":"black", color:theme==="light"?"black":"white",minHeight:"100vh"}}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/searchnews" element={<SearchNews/>}/>
                    <Route path="/searchnews/:id" element={<NewsDetail/>}/>
                    <Route path="/technologyNews" element={<TechnologyNews/>}/>
                    <Route path="/educationnews" element={<EducationNews/>}/>
                    <Route path="/businessnews" element={<BusinessNews/>}/>
                    <Route path="/sportnews" element={<SportsNews/>}/>
                    <Route path="/healthnews" element={<HealthNews/>}/>
                    <Route path="/sciencenews" element={<ScienceNews/>}/>
                    <Route path="/entertainmentnews" element={<EntertainmentNews/>}/>
                    <Route path="/bookmarks" element={<Bookmark/>}/>
                </Route>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}
export default App