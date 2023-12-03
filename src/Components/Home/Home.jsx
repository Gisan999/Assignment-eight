import CategorySection from "../categorySection/categorySection";
import { useEffect, useState } from "react";
const Home = () => {
    const [Category, setCategory] = useState([]);
    const [filterCard, setFilterCard] = useState([]);
    const handleFieldBtn = e => {
        e.preventDefault();
        handleClick(e.target.name.value)
    }
    const handleClick = id => {
        console.log(id);
        if (id === 'Education') {
            const education = Category?.filter(card => card.category === "Education");
            setFilterCard(education);
        }
        else if( id === 'Health'){
            const health = Category?.filter(card => card.category === "Health");
            setFilterCard(health)
        }
        else if( id === 'Food'){
            const food = Category?.filter(card => card.category === "Food");
            setFilterCard(food)
        }
        else if(id === 'Clothing'){
            const cloth = Category?.filter(card => card.category === "Clothing");
            setFilterCard(cloth);
        }
    }
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
               setFilterCard(data);
                setCategory(data);
            })
    }, [])
    return (
        <div>
            <div>
                <div className="relative grid  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute  inset-0 m-0 overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/GFYQ0gt/cover.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-white/90 via-white/90 to-white/90"></div>
                    </div>
                    <div className="relative p-6 py-20 md:py-40 lg:py-60 px-6 md:px-12">
                        <h2 className="mb-6 pb-8 block font-sans  text-3xl md:text-5xl font-bold leading-[1.5] tracking-normal text-black antialiased">
                            I Grow Byy Helping People In Need
                        </h2>
                        <div className="flex justify-center items-center">
                            <form
                                onSubmit={handleFieldBtn}>
                                <input className="py-[6px] pl-2 pr-12 md:pr-48 bg-transparent border-2 border-gray-300 rounded-md" type="text" placeholder="Search here...." name="name" />
                                <input className="bg-[#FF444A] text-white py-2 px-4 relative right-4 rounded-r-lg" type="submit" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-16">
                <div className="max-w-screen-xl mx-auto mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            filterCard?.map(data => <CategorySection key={data.id} data={data}></CategorySection>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;