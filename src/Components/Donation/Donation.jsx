import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/LocalStorage";
import DisplayDonation from "../DisplayDonation/DisplayDonation";



const Donation = () => {
    const cotegory = useLoaderData();
const [donateCategory, setDonateCategory] = useState([]);


    useEffect(() => {
        const storedcategoryIds = getStoredDonation();
        if(cotegory.length > 0){
            const categoryDonate = cotegory.filter(data => storedcategoryIds.includes(data.id));
            // console.log(categoryDonate);
            setDonateCategory(categoryDonate);
        }
    },[])
    return (
        <div className="container mx-auto mt-8 lg:mt-16">
            {/* <h1>the donation page , {donateCategory.length}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-3 lg:px-0">
                {
                    donateCategory.map(data => <DisplayDonation key={data.id} data={data}></DisplayDonation>)
                }
            </div>
        </div>
    );
};

export default Donation;