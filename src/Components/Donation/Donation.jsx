import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/LocalStorage";
import DisplayDonation from "../DisplayDonation/DisplayDonation";



const Donation = () => {
    const cotegory = useLoaderData();
    const [donateCategory, setDonateCategory] = useState([]);

    const [donationNum, setDonationNum] = useState(4);

    useEffect(() => {
        const storedcategoryIds = getStoredDonation();
        if (cotegory.length > 0) {
            const categoryDonate = cotegory.filter(data => storedcategoryIds.includes(data.id));
            // console.log(categoryDonate);
            setDonateCategory(categoryDonate);
        }
    }, [])
    return (
        <div className="container mx-auto my-8 lg:my-16">
            {/* <h1>the donation page , {donateCategory.length}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-3 lg:px-0">
                {
                    donateCategory?.slice(0, donationNum).map(data => <DisplayDonation key={data.id} data={data}></DisplayDonation>)
                }
            </div>

            <div className={donateCategory.length < 5 && 'hidden'}>
                <div className={donationNum === donateCategory.length && 'hidden'}>

                    <div className="flex justify-center py-8">
                        <button onClick={() => setDonationNum(donateCategory.length)}
                            className="middle text-white bg-green-700 none center rounded-lg py-2 px-5 font-medium transition-all" > See All </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Donation;