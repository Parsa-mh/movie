import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import logo from "../assets/logo.svg"
import square from "../assets/icon-nav-home.svg"
import squareFull from "../assets/icon-nav-home-white.svg"
import movies from "../assets/icon-nav-movies.svg"
import movieFull from "../assets/icon-nav-movies-white.svg"
import tv from "../assets/icon-nav-tv-series.svg"
// import tvFull from ""
import bookmark from "../assets/icon-nav-bookmark.svg"
import profile from "../assets/image-avatar.png"
import search from "../assets/icon-search.svg"
import "../style/App.css"

const App = () => {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="side-items-parent">
                    <ul className="side-items">
                        <li>
                            <img src={square} alt="" />
                        </li>
                        <li>
                            <img src={movies} alt="" />
                        </li>
                        <li>
                            <img src={tv} alt="" />
                        </li>
                        <li>
                            <img src={bookmark} alt="" />
                        </li>
                    </ul>
                </div>
                <div className="profile">
                    <div>
                        <img src={profile} alt="" />
                    </div>
                </div>
            </nav>
            <div className="search-box container">
                <img src={search} alt="" />
                <input type="text" className="search-input" placeholder="Search for movies or TV series" />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;