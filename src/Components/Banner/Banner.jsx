import { useState } from "react";
const Banner = () => {


    const [value, setValue] = useState('');
    const handleFieldBtn = e=> {
        e.preventDefault();
        setValue(e.target.name.value)
        
    }
    console.log(value)
   
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
                        <form onSubmit={handleFieldBtn}>
                            <input className="py-[6px] pl-2 pr-20 md:pr-48 bg-transparent border-2 border-gray-300 rounded-md" type="text" placeholder="Search here...." name="name" />
                            <input className="bg-[#FF444A] text-white py-2 px-4 relative right-4 rounded-r-lg" type="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;