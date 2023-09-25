/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CategorySection = ({ data }) => {
    const {id, title, category, picture, color_bg, text_color, bg_color } = data;
    // console.log(color)
    return (
        <div className="flex justify-center">

           <Link to={`/details/${id}`}>
           <div style={{ 'background': color_bg }} className={`relative flex flex-col rounded-xl w-72 `}>
                <div className="relative overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img src={picture} />
                </div>
                <div>

                    <div className="p-3">

                        <button style={{ 'background': bg_color, 'color': text_color }}
                            className="middle none center rounded-sm py-1 px-3  font-medium transition-all
                      "
                        >
                            {category}
                        </button>
                        <h3 style={{ 'color': text_color }} className={` py-5 font-bold text-xl`}>{title}</h3>
                    </div>

                </div>
            </div>
           
           </Link>

        </div>
    );
};

export default CategorySection;