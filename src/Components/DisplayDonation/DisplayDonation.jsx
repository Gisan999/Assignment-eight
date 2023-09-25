/* eslint-disable react/prop-types */


const DisplayDonation = ({ data }) => {
    // console.log(data);
    const {title, price, category, picture, bg_color, text_color, color_bg} = data;
    return (
        <div>
            <div  style={{ 'background': color_bg }} className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                <button style={{ 'background': bg_color, 'color': text_color }}
                            className="middle none center rounded-sm py-1 px-3  font-medium transition-all
                      "
                        >
                            {category}
                        </button>
                    <h4 className="mb-4 mt-5 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                       {title}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                      {price}
                    </p>
                  

                    <button 
                style={{ 'background': text_color }}
                className="middle none center rounded-lg py-3 px-6 font-sans text-sm md:text-md font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
            >
                View Details
            </button>
                </div>
            </div>
        </div>
    );
};

export default DisplayDonation;