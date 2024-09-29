import { Routes, BrowserRouter, Route, NavLink,Link } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarked from "./pages/Bookmarked";
import logo from "../assets/logo.svg"
import squareFull from "../assets/icon-nav-home-white.svg"
import moviesFull from "../assets/icon-nav-movies-white.svg"
import tvFull from "../assets/icon-nav-tv-series-white.svg"
import bookmark from "../assets/icon-bookmark-full.svg"
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
                            <NavLink to="/">
                                <img src={squareFull} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies">
                                <img src={moviesFull} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/tv-series">
                                <img src={tvFull} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bookmarks">
                                <img src={bookmark} style={{transform : "scale(1.3)"}} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="profile">
                    <div>
                        <img src={profile} />
                    </div>
                </div>
            </nav>
            <div className="search-box container">
                <img src={search} />
                <input type="text" className="search-input" placeholder="Search for movies or TV series" />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tv-series" element={<Series />} />
                <Route path="/bookmarks" element={<Bookmarked />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;