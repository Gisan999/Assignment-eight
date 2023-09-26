import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { donation } from "../Utility/LocalStorage";
const CardDetails = () => {
    const [categoryDetails, setCategoryDetails] = useState({});
    const { id } = useParams();
    const idInt = parseInt(id);
    const donate = useLoaderData();
    useEffect(() => {
        const findCategoryId = donate?.find(card => card.id == id)
        setCategoryDetails(findCategoryId)
    }, [id, donate])
    const { title, picture, text_color, description, price } = categoryDetails;
    const handleLoadData = () => {
        donation(idInt);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your donation has been successful.',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-11">
            <div className=" flex justify-center relative rounded-xl">
                <img src={picture} className="w-full h-full rounded-xl px-8 lg:px-0" />

            </div>

            <div className="px-8 lg:px-0">
                <div className=" h-16 md:h-28 w-full bg-black rounded-b-xl relative bottom-16 md:bottom-28 mix-blend-overlay ">
                </div>
            </div>

            <button onClick={handleLoadData}
                style={{ 'background': text_color }}
                className="relative bottom-[120px] md:bottom-48 left-12 md:left-28 lg:left-10  middle none center rounded-lg py-2 md:py-3 px-4 md:px-6 font-sans text-sm md:text-md font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
            >
                Donate {price}
            </button>
            <div className="relative bottom-20 space-y-5 px-8 lg:px-0">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;