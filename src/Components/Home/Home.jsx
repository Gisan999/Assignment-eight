import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import Banner from "../Banner/Banner";


const Home = () => {

    const categories = useLoaderData();
    // console.log(categories);

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Category Category={categories}></Category>
            </div>
        </div>
    );
};

export default Home;