/* eslint-disable react/prop-types */

import CategorySection from "../categorySection/categorySection";


const Category = ({Category}) => {
    console.log(Category.length);
    return (
        <div className="max-w-screen-xl mx-auto mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    Category?.map(data => <CategorySection  key={data.id} data={data}></CategorySection>)
                }
            </div>
        </div>
    );
};

export default Category;