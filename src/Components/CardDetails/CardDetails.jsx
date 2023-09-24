import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const [categoryDetails, setCategoryDetails] = useState({});
    const { id } = useParams();
    const donate = useLoaderData();


    useEffect(() => {

        const findCategoryId = donate?.find(card => card.id == id)
        console.log(findCategoryId)
        setCategoryDetails(findCategoryId)

    }, [id, donate])

    const { title, picture, text_color, description, price } = categoryDetails;

    return (
        <div className="max-w-screen-xl mx-auto mt-11">
            <div className=" flex justify-center h-full lg:w-[1280px]  relative rounded-xl">

                <img src={picture} className="w-96 md:w-3/4 lg:w-full h-full rounded-xl " />
            </div>
            <div className=" bg-black py-9 w-96 md:w-3/4 lg:w-full h-14 md:h-28 rounded-b-xl relative bottom-16 md:bottom-28 mix-blend-overlay left-[21px] md:left-24 lg:left-0">

            </div>
            <button style={{ 'background': text_color }}
                className="relative bottom-[120px] md:bottom-48 left-12 md:left-28 lg:left-10  middle none center rounded-lg py-3 px-6 font-sans text-sm md:text-md font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
            >
                Donate {price}
            </button>
            <div className="relative bottom-20 space-y-5 px-5 lg:px-0">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;