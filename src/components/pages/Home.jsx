import data from "../../data/data"
import bookmark from "../../assets/icon-bookmark-empty.svg"
import bookmarkFull from "../../assets/icon-bookmark-full.svg"
import "../../style/home.css"
const Home = () => {

    return (
        <div className="container home">
            <div></div>
            <div>
                <h2 style={{marginBottom : 20}}>Recommended for you</h2>
                <div className="movies">
                    {data.filter((item) => {
                        return item.year >= 2019
                    }).map((item,index) => {
                        const { title, thumbnail, year, category, rating, isBookmarked } = item
                        
                        return (
                            <div className="movie" key={index}>
                                <div className="thumbnail">
                                    <img className="banner" src={thumbnail.regular.large} alt="" />
                                    <div className="save-btn">
                                        <img className="save-img" src={isBookmarked ? bookmarkFull : bookmark} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="movie-detail">
                                        <span>{year}</span> . <span>{category}</span> . <span>{rating}</span>
                                    </div>
                                    <h3>{title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
 )
}
export default Home;