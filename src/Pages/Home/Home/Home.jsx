import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Offer from "../Offer/Offer";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Trending from "../Trending/Trending";


const Home = () => {
    return (
        <>
            <Header/>
            <Gallery/>
            <ShopByCategory/>
            <Trending/>
            <Offer/>
        </>
    );
};

export default Home;