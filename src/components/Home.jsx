import data from "../data/data"
import "../style/home.css"
const Home = () => {

    return (
        <div className="container home">
            <div></div>
            <div>
                <h2>Recommended for you</h2>
                <div className="movies">
                    {data.filter((item) => {
                        return item.year >= 2019
                    }).map((item) => {
                        const { title } = item
                        return (
                            <>
                                <div></div>
                                <div>
                                    <div></div>
                                    <div>
                                        <span></span>.<span></span>.<span></span>
                                    </div>
                                    <div></div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
 )
}
export default Home;