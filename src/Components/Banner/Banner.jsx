

const Banner = () => {
    return (
        <div>
            <div className="relative grid  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute  inset-0 m-0 overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/GFYQ0gt/cover.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-white/90 via-white/90 to-white/90"></div>
                </div>
                <div className="relative p-6 py-48 px-6 md:px-12">
                    <h2 className="mb-6 pb-8 block font-sans text-5xl font-bold leading-[1.5] tracking-normal text-black antialiased">
                        I Grow By Helping People In Need
                    </h2>

                  <div className="flex justify-center items-center">
                  <input className="py-[6px] pl-2 pr-20 md:pr-36 bg-transparent border-2 border-gray-300 rounded-md" type="text" placeholder="Search here...." />
                    <button
                        className="middle relative right-10 none center rounded-r-lg bg-[#FF444A] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Button
                    </button>
                  </div>


                </div>
            </div>
        </div>
    );
};

export default Banner;