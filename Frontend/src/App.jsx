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
import Profile from "./pages/Profile"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"

function App(){
    const { theme }=Store()
    return(
        <div style={{background:theme==="light"?"white":"black", color:theme==="light"?"black":"white",minHeight:"100vh"}}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/searchnews" element={<ProtectedRoute><SearchNews/></ProtectedRoute>}/>
                    <Route path="/searchnews/:id" element={<ProtectedRoute><NewsDetail/></ProtectedRoute>}/>
                    <Route path="/technologyNews" element={<ProtectedRoute><TechnologyNews/></ProtectedRoute>}/>
                    <Route path="/educationnews" element={<ProtectedRoute><EducationNews/></ProtectedRoute>}/>
                    <Route path="/businessnews" element={<ProtectedRoute><BusinessNews/></ProtectedRoute>}/>
                    <Route path="/sportnews" element={<ProtectedRoute><SportsNews/></ProtectedRoute>}/>
                    <Route path="/healthnews" element={<ProtectedRoute><HealthNews/></ProtectedRoute>}/>
                    <Route path="/sciencenews" element={<ProtectedRoute><ScienceNews/></ProtectedRoute>}/>
                    <Route path="/entertainmentnews" element={<ProtectedRoute><EntertainmentNews/></ProtectedRoute>}/>
                    <Route path="/bookmarks" element={<ProtectedRoute><Bookmark/></ProtectedRoute>}/>
                    <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
                </Route>
                <Route path="/signup" element={<PublicRoute><Signup/></PublicRoute>}/>
                <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
            </Routes>
        </div>
    )
}
export default App